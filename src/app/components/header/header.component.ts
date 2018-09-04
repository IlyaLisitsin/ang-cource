import { Component, OnInit } from '@angular/core'

interface User {
  id: string
  firstName: string
  lastName: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  userLogin: any = <User>{ id: '123213', firstName: 'Niko', lastName: 'Bobokin' }

  constructor() { }

  ngOnInit() {
  }

  logoutClick = () => console.log('logout button clicked')

}
