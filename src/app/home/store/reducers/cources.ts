import { createSelector } from "@ngrx/store";

import * as CourcesActions from '../actions/cources';
import { selectRootState } from "./root-selector";

import { Cource, PageInfo } from "../../models";

export interface State {
  courcesList: Array<Cource>,
  pageInfo: PageInfo,
}

const initialState: State = {
  courcesList: [],
  pageInfo: new PageInfo,
};

export function reducer(state = initialState, { payload, type }: CourcesActions.Actions) {
  switch (type) {
    case CourcesActions.FETCH_COURCES_SUCCESS:
      return { ...state, courcesList: payload.courcesList, pageInfo: payload.pageInfo };
    default:
      return state;
  }
}

export const getCources = createSelector(selectRootState, state => state.cources);
export const getCourcesList = createSelector(getCources, state => state.courcesList);
export const getPaginationData = createSelector(getCources, state => state.pageInfo);
