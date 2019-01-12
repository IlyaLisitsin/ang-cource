import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as RouterActions from '../actions/router';
import { map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
      ofType(RouterActions.GO),
      map((action: RouterActions.Go) => action.payload),
      map( ({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras })
      )
  )

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.BACK),
    map(() => this.location.back()),
  )


  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.FORWARD),
    map(() => this.location.forward())
  )
}
