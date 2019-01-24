import { Action } from "@ngrx/store";

export const FETCH_COURCES = '[Cources] Fetch cources';
export const FETCH_COURCES_SUCCESS = '[Cources] Fetch cources success';
export const FETCH_COURCES_ERROR = '[Cources] Fetch cources error';

export const REMOVE_COURCE = '[Cources] Remove cources cource';

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

export class RemoveCource implements Action {
  readonly type = REMOVE_COURCE;

  constructor(public payload: number) {}
}

export type Actions =
  | FetchCources
  | NotifyFetchCourcesSuccess
  | NotifyFetchCourcesError
  | RemoveCource
