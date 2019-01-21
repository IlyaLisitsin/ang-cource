import { createSelector } from "@ngrx/store";

import * as CourcesActions from '../actions/cources';
import { selectRootState } from "./root-selector";
import { Cource } from "../../models";

export interface State {
  courcesList: Array<Cource>,
  // page: number,
}

const initialState: State = {
  courcesList: [],
  // page: 1,
};

export function reducer(state = initialState, { payload, type }: CourcesActions.Actions) {
  switch (type) {
    case CourcesActions.FETCH_COURCES_SUCCESS:
      return { ...state, courcesList: payload };
    default:
      return state;
  }
}

export const getCources = createSelector(selectRootState, state => state.cources);
export const getCourcesList = createSelector(getCources, state => state.courcesList);
