import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  test: any

  constructor() {
    this.test = 12
  }

  login(firstName) {
    localStorage.setItem('angCourseUser', firstName)
  }

  logout() {
    localStorage.removeItem('angCourseUser')
  }

  isAuthenticated() {
    if (localStorage.getItem('angCourseUser')) {
      return true
    }
    return false
  }

  getConsumerInfo() {
    return localStorage.getItem('angCourseUser')
  }
}
