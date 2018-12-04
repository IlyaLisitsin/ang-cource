import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isAuth: boolean
  isAddCource: boolean = false

  constructor(
    private authService: AuthorizationService,
  ) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated()
  }

  logoutFromHeader() {
    this.authService.logout()
    this.isAuth = this.authService.isAuthenticated()
  }

  loginFromLoginPage() {
    this.isAuth = this.authService.isAuthenticated()
  }
}
