import { Component, OnInit } from '@angular/core'
import { User } from '../../models/user.model'
import { AuthorizationService } from "../../services";
import {a} from "@angular/core/src/render3";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  userLogin: User
  isAuth: boolean
  logout: any
  getConsumerInfo: any

  constructor(private authService: AuthorizationService) {
    this.isAuth = authService.isAuthenticated()
    this.logout = authService.logout
    this.getConsumerInfo = authService.getConsumerInfo

    this.userLogin = this.getConsumerInfo()
  }

  ngOnInit() {
  }

  logoutClick() {
    this.logout()
  }

  login() {
    console.log(3324324)
  }

}
