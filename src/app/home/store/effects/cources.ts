import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, mergeMap, map, tap } from "rxjs/operators";
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
    // tap(() => SHOW SPINNER),
    mergeMap((action: CourcesActions.FetchCources) => {
      // const params = action.payload;

      return this.httpClient.get('http://localhost:8080/api/cources').pipe(
        map(response => new CourcesActions.NotifyFetchCourcesSuccess(response['courcesList'])),
        catchError(error => {
          console.log('CATCHIN DA EROR OVER THERE')
          return of(new CourcesActions.NotifyFetchCourcesError(error))
        })
      );
    })

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
