import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../../services";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isAuth: boolean
  login: any

  constructor( private authService: AuthorizationService) {
    this.isAuth = authService.isAuthenticated()
    this.login = authService.login
  }

  ngOnInit() {
  }

  loginFormSubmit() {
    this.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
  }

}
