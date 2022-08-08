import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { showError, showSuccess, showWarn } from './exception-handling.actions';

@Injectable()
export class DashboardEffects {
    constructor(private actions: Actions,) { }
    private snackBar: MatSnackBar

    @Effect({dispatch: false})
    showSuccess = this.actions.pipe(ofType(showSuccess),
        tap(action =>{
            this.snackBar.open('Success')
        }),
    );

    @Effect({dispatch: false})
    showError = this.actions.pipe(ofType(showError),
        tap(action =>{
            this.snackBar.open('Error')
        }),
    );

    @Effect({dispatch: false})
    showWarn = this.actions.pipe(ofType(showWarn),
        tap(action =>{
            this.snackBar.open('Warning')
        }),
    );
}