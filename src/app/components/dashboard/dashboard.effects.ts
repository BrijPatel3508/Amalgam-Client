import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { DashboardService } from './services/dashboard.service';
import { deleteUser, deleteUserSuccess, loadApplications, loadApplicationsSuccess, loadUsers, loadUsersSuccess } from './dashboard.actions';

@Injectable()
export class DashboardEffects {
    constructor(
        private actions: Actions,
        private dashboardService: DashboardService) { }

    @Effect()
    loadApplications = this.actions.pipe(ofType(loadApplications),
        exhaustMap(action =>
            from(this.dashboardService.getApplications())
                .pipe(map(response => {
                    return loadApplicationsSuccess({ applications: response })
                }))),
    );

    @Effect()
    loadUsers = this.actions.pipe(ofType(loadUsers),
        exhaustMap(action =>
            from(this.dashboardService.getUsers())
                .pipe(map(response => {
                    return loadUsersSuccess({ users: response })
                }))),
    );

    @Effect()
    deleteUser = this.actions.pipe(ofType(deleteUser),
        exhaustMap(action =>
            from(this.dashboardService.deleteUser(action.slid))
                .pipe(map(response => {
                    return deleteUserSuccess({ user: response })
                }))),
    );

    @Effect()
    deleteUserSuccess = this.actions.pipe(ofType(deleteUserSuccess),
        map(() => {
            return loadUsers();
        }),
    );
}