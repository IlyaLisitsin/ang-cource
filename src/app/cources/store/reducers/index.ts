import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'

import * as fromCources from './cources'

export interface State {
  cources: fromCources.State,
}

export const reducers: ActionReducerMap<State> = {
  cources: fromCources.reducer,
};

export const reducer: ActionReducer<State> = combineReducers(reducers);
