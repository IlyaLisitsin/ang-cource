import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

// List of module reducers
import * as fromAuth from './auth';

export interface State {
  auth: fromAuth.AuthState,
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

