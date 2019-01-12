import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "../../shared/store/reducers";

import * as AuthActions from '../../shared/store/actions/auth'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginFromLoginPage: EventEmitter<string>

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {}

  loginFormSubmit() {
    // this.authService.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
    this.store.dispatch(new AuthActions.SignIn())
  }

}
