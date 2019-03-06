import { Action } from '@ngrx/store';
import { LoginForm } from "../../../home/models";

export const SIGN_IN = '[Auth] Sign In';
export const SIGN_IN_SUCCESS = '[Auth] Sign In success';
export const SIGN_IN_ERROR = '[Auth] Sign In error';
export const SIGN_OUT = '[Auth] Sign Out';

export class SignIn implements Action {
  readonly type = SIGN_IN;

  constructor(public payload: LoginForm) {}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;

  constructor(public payload: any) {}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignInError implements Action {
  readonly type = SIGN_IN_ERROR;

  constructor(public payload?: any) {}
}

export type Actions =
  | SignIn
  | SignInSuccess
  | SignInError
  | SignOut
