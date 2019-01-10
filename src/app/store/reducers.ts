import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store'

// List of module reducers
import * as fromShared from '../shared/store/reducers';

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export interface State {
  shared: fromShared.State
}

export const reducers: ActionReducerMap<State> = {
  shared: fromShared.reducer
}

export const metaReducers: MetaReducer<State>[] = [logger]
