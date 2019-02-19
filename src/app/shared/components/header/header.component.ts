import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from '../../../models'
import { State } from "../../../store/reducers";
import { Store } from "@ngrx/store";

import * as AuthActions from '../../store/actions/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isAuth: string;

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new AuthActions.SignOut())
  }


}
