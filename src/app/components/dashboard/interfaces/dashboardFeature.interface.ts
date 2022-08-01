import { IUser } from "src/app/interfaces/user.interface";

export interface IDashboardFeature {
    applications: any[];
    users: IUser[];
    loggedInUder: IUser
}