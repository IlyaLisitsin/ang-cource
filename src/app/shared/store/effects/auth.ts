import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap, tap, finalize, catchError, take } from "rxjs/operators";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { State } from "../reducers";

import * as AuthActions from '../actions/auth';
import * as RouterActions from '../actions/router';
import * as UiActions from '../actions/ui'

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
        take(1),
        map(response => {
          if (response['error']) return new AuthActions.SignInError(response['error']);

          this.store.dispatch(new AuthActions.SignInSuccess(response));

          return new RouterActions.Go({
            path: ['/cources']
          })
        }),
        catchError(error => of(new AuthActions.SignInError(error))),
        finalize(() => this.store.dispatch(new UiActions.HideSpinner()))
      )
    }),
  );

  @Effect()
  signOut$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_OUT),
    map(() => new RouterActions.Go({
      path: ['/login']
    }))
  );

 @Effect({ dispatch: false })
  notifySignInError$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_ERROR),
    map((action: AuthActions.SignInError) => {
      const { statusText, message } = action.payload;

      return this.store.dispatch(new UiActions.ShowModal({ heading: statusText, content: message }));
    })
  );

}
