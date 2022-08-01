export interface IUser {
    slid: string;
    username: string;
    email: string;
    password?: string;
    userType: string;
    accessToken?: string;
}