import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { Features } from "src/app/enums/features.enum";

export const appShared = createFeatureSelector<any>(Features.AppShared);

// export const selectUsers = createSelector(
//     task2,
//     (state) => state.task2.users
// );

// interface RouterState {
//     router: fromRouter.RouterReducerState<any>;
// }

// const selectRouter = createFeatureSelector<
//     RouterState,
//     RouterReducerState<any>
// >('router');

// export const {
//     selectCurrentRoute, // select the current route
//     selectFragment, // select the current route fragment
//     selectQueryParams, // select the current route query params
//     selectQueryParam, // factory function to select a query param
//     selectRouteParams, // select the current route params
//     selectRouteParam, // factory function to select a route param
//     selectRouteData, // select the current route data
//     selectUrl, // select the current url
// } = getSelectors(selectRouter);

// export const selectRouteParamUserId: MemoizedSelector<any, string> = createSelector(
//     selectRouteParam('userId'),
//     (id) => id
// );

const initialDialogModal = {

};

const dialogModalReducer = createReducer(initialDialogModal,

);

export function reducer(state: any, action: Action) {
    return dialogModalReducer(state, action);
}