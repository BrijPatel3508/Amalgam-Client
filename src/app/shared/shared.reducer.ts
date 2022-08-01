import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { Features } from "src/app/enums/features.enum";
import { login, loginSuccess } from "./shared.actions";
import { ISharedFeature } from "./interfaces/shared-feature.interface";

export const sharedFeatureReducer = createFeatureSelector<ISharedFeature>(Features.Shared);

export const dashboard = createSelector(
    sharedFeatureReducer,
    (state: ISharedFeature) => state
);

export const selectIsUserLoggedIn = createSelector(
    dashboard,
    (state: ISharedFeature) => state?.loggeedInUser?.username?.length > 0
);

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

const initialShared: ISharedFeature = {
    loggeedInUser: {
        email: '',
        role: '',
        username: ''
    }
};

const sharedReducer = createReducer(initialShared,
    on(loginSuccess, (state: ISharedFeature, action) => {
        const newState: ISharedFeature = cloneDeep(state);
        newState.loggeedInUser.username = action.user.username;
        newState.loggeedInUser.email = action.user.email;
        newState.loggeedInUser.role = action.user.userType;
        return newState;
    }),
);

export function reducer(state: ISharedFeature, action: Action) {
    return sharedReducer(state, action);
}