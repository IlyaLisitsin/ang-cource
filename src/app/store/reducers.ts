import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store'

// List of module reducers
import * as fromShared from '../shared/store/reducers';
import * as fromHome from '../home/store/reducers';

// export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: any): State {
//     console.log('action', action);
//     console.log('state', state);
//     console.log('===');
//
//     return reducer(state, action);
//   };
// }

export interface State {
  shared: fromShared.State,
  home: fromHome.State,
}

export const reducers: ActionReducerMap<State> = {
  shared: fromShared.reducer,
  home: fromHome.reducer,
};

// export const metaReducers: MetaReducer<State>[] = [logger]

