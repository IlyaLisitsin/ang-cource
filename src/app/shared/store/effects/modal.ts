import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { State } from "../reducers";

import * as UIActions from '../actions/ui';

@Injectable()
export class ModalEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
  ) {}

  @Effect({ dispatch: false })
  showModal$ = this.actions$.pipe(
    ofType(UIActions.SHOW_MODAL),
    map((action: UIActions.ShowModal) => action.payload),
  )

  @Effect({ dispatch: false })
  hideModal$ = this.actions$.pipe(
    ofType(UIActions.HIDE_MODAL),
    map((action: UIActions.HideModal) => action.payload),
  )

}
