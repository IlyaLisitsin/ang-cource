import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { User } from '../../models'
import { AuthorizationService } from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isAuth: string
  @Output() logoutFromHeader = new EventEmitter<Event>()
  userLogin: User
  getConsumerInfo: any

  constructor(private authService: AuthorizationService) {
    this.getConsumerInfo = authService.getConsumerInfo
    this.userLogin = this.getConsumerInfo()
  }

  ngOnInit() {
  }

  logoutClick() {
    this.logoutFromHeader.emit()
  }

  login() {
    console.log(3324324)
  }

}
