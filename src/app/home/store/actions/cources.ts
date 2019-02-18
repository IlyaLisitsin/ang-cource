import { Action } from "@ngrx/store";
import {Cource} from "../../models";

export const FETCH_COURCES = '[Cources] Fetch cources';
export const FETCH_COURCES_SUCCESS = '[Cources] Fetch cources success';
export const FETCH_COURCES_ERROR = '[Cources] Fetch cources error';

export const REMOVE_COURCE = '[Cources] Remove cource';

export const ADD_COURCE = '[Cources] Add cource';
export const EDIT_COURCE = '[Cources] Edit cource';

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

export class AddCource implements Action {
  readonly type = ADD_COURCE;

  constructor(public payload: Cource) {}
}

export class EditCource implements Action {
  readonly type = EDIT_COURCE;

  constructor(public payload: Cource) {}
}


export type Actions =
  | FetchCources
  | NotifyFetchCourcesSuccess
  | NotifyFetchCourcesError
  | RemoveCource
  | AddCource
  | EditCource
