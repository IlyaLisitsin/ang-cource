import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/reducers";
import * as AuthActions from '../../store/actions/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private router: Router,
    private store: Store<State>,
  ) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      tap(val => {
        this.isLoggedIn = true
        this.router.navigate([this.redirectUrl || '/'])
      })
    )
  }

  logout(): void {
    this.store.dispatch(new AuthActions.SignOut)
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}
