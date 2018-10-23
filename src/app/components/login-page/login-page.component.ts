import {Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from "../../services";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginFromLoginPage: any

  login: any

  constructor( private authService: AuthorizationService) {
    this.login = authService.login
  }

  ngOnInit() {
  }

  loginFormSubmit() {
    this.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
    this.loginFromLoginPage.emit()
  }

}
