import { Component, Input, OnInit } from '@angular/core'
import { User } from '../../../models'
import { State } from "../../../store/reducers";
import { Store } from "@ngrx/store";

import * as AuthActions from '../../store/actions/auth'
import { getAuthState } from "../../store/reducers/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() isAuth: string;
  isLogged = false;
  user: User;

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.store.select(getAuthState).subscribe(
      ({ isLogged, user }) => {
        this.isLogged = isLogged;
        this.user = user;
      }
    )

  }

  logout() {
    this.store.dispatch(new AuthActions.SignOut())
  }


}
