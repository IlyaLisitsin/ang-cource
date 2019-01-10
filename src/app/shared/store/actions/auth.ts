import { Action } from '@ngrx/store';

export const SIGN_IN = '[Auth] Sign In';
export const SIGN_OUT = '[Auth] Sign Out';

export class SignIn implements Action {
  readonly type = SIGN_IN;

  constructor(public payload?: any) {}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;

  constructor(public payload?: any) {}
}

export type Actions =
  | SignIn
  | SignOut
