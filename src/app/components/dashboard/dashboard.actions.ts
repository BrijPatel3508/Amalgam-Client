import { createAction, props } from "@ngrx/store";
import { IApplication } from "src/app/interfaces/applications.interface";
import { IUser } from "src/app/interfaces/user.interface";

export const loadApplications = createAction('[Dashboard] Load Applications');

export const loadApplicationsSuccess = createAction('[Dashboard] Load Applications Success',
    props<{ applications: IApplication[] }>());

// export const addUser = createAction('[Dashboard] Add User',
//     props<{ user: IUser }>());

export const loadUsers = createAction('[Dashboard] Load Users');

export const loadUsersSuccess = createAction('[Dashboard] Load Users Success',
    props<{ users: IUser[] }>());

export const deleteUser = createAction('[Dashboard] Delete User',
    props<{ slid: string }>());

export const deleteUserSuccess = createAction('[Dashboard] Delete User Success',
    props<{ user: IUser }>());