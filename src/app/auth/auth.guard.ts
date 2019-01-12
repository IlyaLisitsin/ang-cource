import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthService} from "../shared/services/auth/auth.service";

import * as fromAuth from '../shared/store/reducers/auth'
import * as RouterActions from '../shared/store/actions/router'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogged$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromAuth.AuthState>
  ) {
    this.isLogged$ = this.store.select(fromAuth.getIsLogged)
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string) {

    return this.isLogged$.pipe(
      map(isLogged => {

        !isLogged && this.store.dispatch(new RouterActions.Go({
          path: ['/login']
        }))

        return isLogged
      })
    )
  }
}
