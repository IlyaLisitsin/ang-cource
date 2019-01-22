import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, mergeMap, map, tap, finalize } from "rxjs/operators";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { State } from "../reducers";
import * as CourcesActions from '../actions/cources';
import * as UIActions from "../../../shared/store/actions/ui";

@Injectable()
export class CourcesEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private httpClient: HttpClient,
  ) {}

  @Effect()
  fetchCources$ = this.actions$.pipe(
    ofType(CourcesActions.FETCH_COURCES),
    tap(() => this.store.dispatch(new UIActions.ShowSpinner())),
    mergeMap((action: CourcesActions.FetchCources) => {
      const page = action.payload ? action.payload : 1;

      return this.httpClient.get(`http://localhost:8080/api/cources?page=${page}&size=3`).pipe(
        map(response => new CourcesActions.NotifyFetchCourcesSuccess(response)),
        catchError(error => of(new CourcesActions.NotifyFetchCourcesError(error))),
        finalize(() => this.store.dispatch(new UIActions.HideSpinner()))
      );
    }),

  );

  @Effect({ dispatch: false })
  notifyFetchCourcesError$ = this.actions$.pipe(
    ofType(CourcesActions.FETCH_COURCES_ERROR),
    map(action => {
      // @ts-ignore
      const { statusText, message } = action.payload;

      this.store.dispatch(new UIActions.ShowModal({ heading: statusText, content: message }));
    })
  );

  @Effect({ dispatch: false })
  notifyFetchCourcesSuccess$ = this.actions$.pipe(
    ofType(CourcesActions.FETCH_COURCES_SUCCESS),
    map(cources => cources)
  )
}
