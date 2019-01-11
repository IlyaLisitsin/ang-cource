import { createFeatureSelector } from '@ngrx/store';

import { State } from '.';

export const selectRootState = createFeatureSelector<State>('shared');
