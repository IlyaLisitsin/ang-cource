import { Injectable } from '@angular/core';
import {LoginForm} from "../models";

import * as UiActions from '../../shared/store/actions/ui'
import { State } from "../../store/reducers";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class FormInputValidationService {

  constructor(
    private store: Store<State>
  ) { }


  public isValid(data: LoginForm) {
    const { email, password } = data;
    if (!email || !password) {
      this.store.dispatch(new UiActions.ShowModal({ heading: 'Validation Error!', content: 'There are should not be empty fields' }));
      return false;
    } else if (!this.validateEmail(email)) {
      this.store.dispatch(new UiActions.ShowModal({ heading: 'Validation Error!', content: 'Please type the correct email' }));
      return false;
    }

    return true;
  }

  private validateEmail(email: string) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}
