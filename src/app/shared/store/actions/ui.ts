import { Action } from "@ngrx/store";
import { ModalData } from "../../models";

export const SHOW_MODAL = '[UI] Show modal]'
export const HIDE_MODAL = '[UI] Hide modal]'

export class ShowModal implements Action {
  readonly type = SHOW_MODAL

  constructor(public payload: ModalData) {}
}

export class HideModal implements Action {
  readonly type = HIDE_MODAL

  constructor(public payload?: any) {}
}

export type Actions =
  | ShowModal
  | HideModal
