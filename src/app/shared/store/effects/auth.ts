import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { State } from "../reducers";

import * as AuthActions from '../actions/auth'
import * as RouterActions from '../actions/router'

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>
  ) {}

  @Effect()
  signIn$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN),
    map(() => new RouterActions.Go({
        path: ['/cources']
      }))
  )

  @Effect()
  signOut$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_OUT),
    map(() => new RouterActions.Go({
      path: ['/login']
    }))
  )
}
