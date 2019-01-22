import { Action } from "@ngrx/store";
import { ModalData } from "../../models";

export const SHOW_MODAL = '[UI] Show modal';
export const HIDE_MODAL = '[UI] Hide modal';

export const SHOW_SPINNER = '[UI] Show spinner';
export const HIDE_SPINNER = '[UI] Hide spinner';

export class ShowModal implements Action {
  readonly type = SHOW_MODAL;

  constructor(public payload: ModalData) {}
}

export class HideModal implements Action {
  readonly type = HIDE_MODAL;

  constructor(public payload?: any) {}
}

export class ShowSpinner implements Action {
  readonly type = SHOW_SPINNER;

  constructor(public payload?: any) {}
}

export class HideSpinner implements Action {
  readonly type = HIDE_SPINNER;

  constructor(public payload?: any) {}
}

export type Actions =
  | ShowModal
  | HideModal
  | ShowSpinner
  | HideSpinner
