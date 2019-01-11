import { createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromRoot from '.';
import { selectRootState } from './root-selector';

export const getRouterState = createSelector(
  selectRootState,
  (state: fromRoot.State): fromRouter.RouterReducerState => state.router || { navigationId: null, state: null }
);
