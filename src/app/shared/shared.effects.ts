import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { map, exhaustMap, tap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';
import { resultReceived } from '../app-shared/dialog-modal/dialog-modal.actions';
import { AuthServiceService } from '../services/auth-service.service';
import { changeNothing, login, loginSuccess, loginWithGoogle, redirectTo, registerUser, removeTokenKey, setTokenKey } from './shared.actions';
import { Router } from '@angular/router';

@Injectable()
export class SharedEffects {
    constructor(
        private actions: Actions,
        private readonly authservice: AuthServiceService,
        private router: Router) { }

    @Effect()
    resultReceived = this.actions.pipe(ofType(resultReceived),
        map(action => {
            if (action.data.data.ref === 'userLogin') {
                if (action.data.action === 'login') {
                    return login({ username: action.data.user.username, password: action.data.user.password });
                } else {
                    return loginWithGoogle();
                }
            } else if (action.data.data.ref === 'userSignUp') {
                return registerUser({ user: action.data.user });
            }
            return changeNothing();
        }));

    @Effect()
    registerUser = this.actions.pipe(ofType(registerUser),
        exhaustMap(action =>
            from(this.authservice.signUp(action.user))
                .pipe(map(response => {
                    return loginSuccess({ user: response.data });
                }))),
    );

    @Effect()
    login = this.actions.pipe(ofType(login),
        exhaustMap(action =>
            from(this.authservice.login(action.username, action.password))
                .pipe(map(response => {
                    return loginSuccess({ user: response.data });
                }), catchError((err) => { console.log(err); return err }
                ))),
    );

    @Effect()
    loginWithGoogle = this.actions.pipe(ofType(loginWithGoogle),
        exhaustMap(action =>
            from(this.authservice.loginInWithGoogle())
                .pipe(map(response => {
                    //TODO: add loginSuccess from google login
                    return changeNothing();
                }), catchError((err) => { console.log(err); return err }
                ))
        ),
    );

    @Effect()
    loginSuccess = this.actions.pipe(ofType(loginSuccess),
        map(action => {
            return setTokenKey({ tokenKey: action?.user?.accessToken || "" });
        }),
    );

    @Effect({ dispatch: false })
    setTokenKey = this.actions.pipe(ofType(setTokenKey),
        tap(action =>
            this.authservice.setTokenKey(action.tokenKey)),
    );

    @Effect({ dispatch: false })
    removeTokenKey = this.actions.pipe(ofType(removeTokenKey),
        tap(action =>
            this.authservice.removeTokenKey()),
    );

    @Effect({ dispatch: false })
    redirectTo = this.actions.pipe(ofType(redirectTo),
        tap(action =>
            this.router.navigate([`${action.path}`])),
    );
}