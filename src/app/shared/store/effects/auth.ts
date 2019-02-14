import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import {map, mergeMap, tap, finalize, catchError} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";


import { State } from "../reducers";

import * as AuthActions from '../actions/auth';
import * as RouterActions from '../actions/router';
import * as UiActions from '../actions/ui'
import {of} from "rxjs";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private httpClient: HttpClient
  ) {}

  @Effect()
  signIn$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN),
    tap(() => this.store.dispatch(new UiActions.ShowSpinner)),
    mergeMap((action: AuthActions.SignIn) => {
      const loginFormData = action.payload;

      return this.httpClient.post('http://localhost:8080/api/login', loginFormData).pipe(
        map(response => {
          console.log('login response', response)
          return new RouterActions.Go({
            path: ['/cources']
          })

        }),
        catchError(error => of(new AuthActions.SignInError(error))),
        finalize(() => this.store.dispatch(new UiActions.HideSpinner()))
      )
    }),
  )

  @Effect()
  signOut$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_OUT),
    map(() => new RouterActions.Go({
      path: ['/login']
    }))
  )

 @Effect({ dispatch: false })
  notifySignInError$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_ERROR),
    map((action: AuthActions.SignInError) => {
      const { statusText, message } = action.payload;

      this.store.dispatch(new UiActions.ShowModal({ heading: statusText, content: message }));
    })
  );

}
