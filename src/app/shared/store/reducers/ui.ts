import { ModalData } from "../../models";

import * as UIActions from '../actions/ui'
import { createSelector } from "@ngrx/store";
import { selectRootState } from "./root-selector";

export interface UIState {
  modal: {
    show: boolean;
    data: ModalData
  },
  spinner: {
    show: boolean,
  }
}

export interface State  {
  ui: UIState
}

const initialState: UIState = {
  modal: {
    show: false,
    data: null,
  },
  spinner: {
    show: false,
  }
};

export function reducer(state = initialState, { payload, type }: UIActions.Actions) {
  switch (type) {
    case UIActions.SHOW_MODAL:
      return { ...state, modal: { show: true, data: payload } };
    case UIActions.HIDE_MODAL:
      return { ...state, modal: { show: false, data: null } };
    case UIActions.SHOW_SPINNER:
      return { ...state, spinner: { show: true } };
    case UIActions.HIDE_SPINNER:
      return { ...state, spinner: { show: false } };
    default:
      return state
  }

}

export const getUIState = createSelector(selectRootState, (state: State): UIState => state.ui);
export const getModal = createSelector(getUIState, state => state.modal);
export const getSpinnerShowFlag = createSelector(getUIState, state => state.spinner.show);

