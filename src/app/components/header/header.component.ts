import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from '../../models'
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isAuth: string
  @Output() logoutFromHeader = new EventEmitter<Event>()

  constructor(
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
  }


}
