import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store/reducers';

import * as AuthActions from '../../../shared/store/actions/auth'
import { HttpClient } from '@angular/common/http';
import { LoginForm} from "../../models";
import {FormInputValidationService} from "../../services/form-input-validation.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginFromLoginPage: EventEmitter<string>;
  loginForm: LoginForm = new LoginForm('','');

  constructor(
    private store: Store<State>,
    private httpClient: HttpClient,
    private validationService: FormInputValidationService,
  ) {}

  ngOnInit() {}

  loginFormSubmit() {
    // this.httpClient.post('http://localhost:8080/api/login', { id: '123213', firstName: 'Niko', lastName: 'Bobokin' }).subscribe(el => console.log(23424, el))
    // this.authService.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
    this.validationService.isValid(this.loginForm) ? this.store.dispatch(new AuthActions.SignIn(this.loginForm)) : null;
  }

}
