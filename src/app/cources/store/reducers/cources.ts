import { createSelector } from "@ngrx/store";

import * as CourcesActions from '../actions/cources';
import { selectRootState } from "./root-selector";
import { Cource } from "../../models";

export interface State {
  cources: Array<Cource>
}

const initialState: State = {
  cources: [],
};

export function reducer(state = initialState, { payload, type }: CourcesActions.Actions) {
  switch (type) {
    case CourcesActions.FETCH_COURCES_SUCCESS:
      return { ...state, cources: [...payload] };
    default:
      return state;
  }
}
