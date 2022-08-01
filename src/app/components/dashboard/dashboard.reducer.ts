import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { cloneDeep } from 'lodash';
import { IDashboardFeature } from "./interfaces/dashboardFeature.interface";
import { Features } from "src/app/enums/features.enum";
import { loadApplicationsSuccess, loadUsersSuccess } from "./dashboard.actions";

export const dashboardFeature = createFeatureSelector<IDashboardFeature>(Features.Dashboard);

export const dashboard = createSelector(
    dashboardFeature,
    (state: IDashboardFeature) => state
);

export const selectUsers = createSelector(
    dashboard,
    (state: IDashboardFeature) => state.users
);

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

const initialDashboard: IDashboardFeature = {
    applications: [],
    users: [],
    loggedInUder: null
};

const dashboardReducer = createReducer(initialDashboard,
    on(loadApplicationsSuccess, (state: IDashboardFeature, action) => {
        const newState: IDashboardFeature = cloneDeep(state);
        newState.applications = action.applications;
        return newState;
    }),
    on(loadUsersSuccess, (state: IDashboardFeature, action) => {
        const newState: IDashboardFeature = cloneDeep(state);
        newState.users = action.users;
        return newState;
    }),
);

export function reducer(state: IDashboardFeature, action: Action) {
    return dashboardReducer(state, action);
}