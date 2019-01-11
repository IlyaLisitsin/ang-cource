import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'

// List of module reducers
import * as fromAuth from './auth';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  auth: fromAuth.AuthState,
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

