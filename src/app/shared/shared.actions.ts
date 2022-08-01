import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces/user.interface";

export const changeNothing = createAction('[Shared] Change Nothing');

export const loginWithGoogle = createAction('[Shared] User Login With Google');

export const login = createAction('[Shared] User Login',
    props<{ username: string; password: string }>());

export const loginSuccess = createAction('[Shared] User Login Success',
    props<{ user: IUser }>());

export const registerUser = createAction('[Shared] Register User',
    props<{ user: IUser }>());

export const addUser = createAction('[Shared] Add User',
    props<{ user: IUser }>());

export const redirectTo = createAction('[Shared] Redirect to',
    props<{ path: string }>());


export const setTokenKey = createAction('[Shared] Set Token Key',
    props<{ tokenKey: string }>());

export const removeTokenKey = createAction('[Shared] Remove Token Key');