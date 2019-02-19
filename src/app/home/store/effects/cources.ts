import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { catchError, mergeMap, map, tap, finalize, take } from "rxjs/operators";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { State } from "../reducers";
import * as CourcesActions from '../actions/cources';
import * as UIActions from "../../../shared/store/actions/ui";
import * as RouterActions from '../../../shared/store/actions/router';
import { getPaginationData } from "../reducers/cources";
import { Cource } from "../../models";

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

      return this.httpClient.get(`http://localhost:8080/api/cources?page=${page}&size=4`).pipe(
        map((response: Array<Cource>) => new CourcesActions.NotifyFetchCourcesSuccess(response)),
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
    map(courcesListWithPageInfo => courcesListWithPageInfo)
  );

  @Effect()
  removeCource$ = this.actions$.pipe(
    ofType(CourcesActions.REMOVE_COURCE),
    tap(() => this.store.dispatch(new UIActions.ShowSpinner())),
    mergeMap((action: CourcesActions.FetchCources) => {
      const id = action.payload;

      return this.store.select(getPaginationData).pipe(
        take(1),
        mergeMap(({ currentPage }) =>
          this.httpClient.delete(`http://localhost:8080/api/cources/${id}?page=${currentPage}&size=4`).pipe(
          map((response) => new CourcesActions.FetchCources(response['pageInfo'].currentPage)),
          catchError(({message, statusText}) => of(this.store.dispatch(new UIActions.ShowModal({ heading: statusText, content: message })))),
          finalize(() => this.store.dispatch(new UIActions.HideSpinner())),
          tap(() => this.store.dispatch(new UIActions.HideModal())),
        ))
      )
    })
  );

  @Effect({ dispatch: false })
  addCource$ = this.actions$.pipe(
    ofType(CourcesActions.ADD_COURCE),
    tap(() => this.store.dispatch(new UIActions.ShowSpinner())),
    mergeMap((action: CourcesActions.AddCource) => {
      const newCource = action.payload;

      return this.httpClient.put('http://localhost:8080/api/cources/add', newCource).pipe(
        finalize(() => this.store.dispatch(new RouterActions.Back())),
        map(() => this.store.dispatch(new UIActions.HideSpinner())),
        catchError(({message, statusText}) => of(this.store.dispatch(new UIActions.ShowModal({ heading: statusText, content: message })))),
      )
    }
  ))

  @Effect({ dispatch: false })
  editCource$ = this.actions$.pipe(
    ofType(CourcesActions.EDIT_COURCE),
    tap(() => this.store.dispatch(new UIActions.ShowSpinner())),
    mergeMap((action: CourcesActions.EditCource) => {
        const newCource = action.payload;

        return this.httpClient.put('http://localhost:8080/api/cources/edit', newCource).pipe(
          finalize(() => this.store.dispatch(new RouterActions.Back())),
          map(() => this.store.dispatch(new UIActions.HideSpinner())),
          catchError(({message, statusText}) => of(this.store.dispatch(new UIActions.ShowModal({ heading: statusText, content: message })))),
        )
      }
    ),
  )
}
