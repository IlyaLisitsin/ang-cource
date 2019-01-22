import { Action } from "@ngrx/store";

export const FETCH_COURCES = '[Cources] Fetch cources';
export const FETCH_COURCES_SUCCESS = '[Cources] Fetch cources success';
export const FETCH_COURCES_ERROR = '[Cources] Fetch cources error';

export class FetchCources implements Action {
  readonly type = FETCH_COURCES;

  constructor(public payload?: number) {}
}

export class NotifyFetchCourcesSuccess implements Action {
  readonly type = FETCH_COURCES_SUCCESS;

  constructor(public payload?: any) {}
}

export class NotifyFetchCourcesError implements Action {
  readonly type = FETCH_COURCES_ERROR;

  constructor(public payload?: any) {}
}

export type Actions =
  | FetchCources
  | NotifyFetchCourcesSuccess
  | NotifyFetchCourcesError

