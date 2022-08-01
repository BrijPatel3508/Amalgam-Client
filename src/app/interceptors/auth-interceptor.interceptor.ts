import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { openDialog } from '../app-shared/dialog-modal/dialog-modal.actions';
import { LoginComponent } from '../shared/login/login.component';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<{ shared: any }>,
    private readonly authservice: AuthServiceService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.TOKEN_KEY; // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(request);
    }

    const req1 = request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, `${token}`)
        .set('Content-Type', 'application/json'),
    });

    return next.handle(req1).pipe(catchError(x => this.handleAuthError(x)));;
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.authservice.removeTokenKey();
      this.store.dispatch(openDialog({
        component: { ...LoginComponent },
        config: {
          data: {
            ref: 'userLogin'
          }
        }
      }));
      // this.router.navigateByUrl(`/login`);
      return of(err.message);
    }
    return throwError(err);
  }
}
