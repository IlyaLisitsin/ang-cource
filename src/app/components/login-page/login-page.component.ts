import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { AuthorizationService } from "../../services";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginFromLoginPage: EventEmitter<string>

  constructor(
    private authService: AuthorizationService
  ) {}

  ngOnInit() {}

  loginFormSubmit() {
    this.authService.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
    this.loginFromLoginPage.emit()
  }

}
