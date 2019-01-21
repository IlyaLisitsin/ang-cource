import { createSelector } from "@ngrx/store";

import * as AuthActions from '../actions/auth'
import { selectRootState } from "./root-selector";

export interface AuthState {
  isLogged: boolean,
  user: string | null
}

const initialState: AuthState = {
  isLogged: false,
  user: null,
}

export function reducer(state = initialState, { payload, type }: AuthActions.Actions):AuthState {
  switch (type) {
    case AuthActions.SIGN_IN:
      return { ...state, isLogged: true, user: payload }
    case AuthActions.SIGN_OUT:
      return { ...state, isLogged: false, user: null }
    default:
      return state;
  }
}

export const getAuthState = createSelector(selectRootState, state => state.auth)
export const getIsLogged = createSelector(getAuthState, state => state.isLogged)
