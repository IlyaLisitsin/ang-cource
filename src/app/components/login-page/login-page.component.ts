import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() loginFromLoginPage: EventEmitter<string>

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  loginFormSubmit() {
    // this.authService.login({ id: '123213', firstName: 'Niko', lastName: 'Bobokin' })
    this.authService.login().subscribe(
      val => val
    )
  }

}
