import { Component, OnInit } from '@angular/core'
import { User } from '../../models/user.model'
import { AuthorizationService } from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  userLogin: any = <User>{ id: '123213', firstName: 'Niko', lastName: 'Bobokin' }
  isAuth: boolean
  logout: any

  constructor(private authService: AuthorizationService) {
    this.isAuth = authService.isAuthenticated()
    this.logout = authService.logout
    console.log(authService)
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
