import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces/user.interface";

export const loadApplications = createAction('[Dashboard] Load Applications');

export const addUser = createAction('[Dashboard] Add User',
    props<{ user: IUser }>,
);