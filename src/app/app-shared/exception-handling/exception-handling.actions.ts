import { createAction, props } from "@ngrx/store";

export const showSuccess = createAction('[App-Shared] Show Success',
    props<{message: string}>());

export const showError = createAction('[App-Shared] Show Success',
    props<{message: string}>());

export const showWarn = createAction('[App-Shared] Show Warning',
    props<{message: string}>());