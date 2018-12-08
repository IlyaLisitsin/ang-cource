import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private router: Router
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
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
}
