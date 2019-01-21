import { Action } from "@ngrx/store";

import { Cource } from "../../models";

export const FETCH_COURCES = '[Cources] Fetch cources';
export const FETCH_COURCES_SUCCESS = '[Cources] Fetch cources success';
export const FETCH_COURCES_ERROR = '[Cources] Fetch cources error';

export class FetchCources implements Action {
  readonly type = FETCH_COURCES;

  constructor(public payload?: Array<Cource>) {}
}

export class FetchCourcesSuccess implements Action {
  readonly type = FETCH_COURCES_SUCCESS;

  constructor(public payload?: any) {}
}


export class FetchCourcesError implements Action {
  readonly type = FETCH_COURCES_ERROR;

  constructor(public payload?: any) {}
}

export type Actions =
  | FetchCources
  | FetchCourcesSuccess
  | FetchCourcesError

