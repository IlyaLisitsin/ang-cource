import { Injectable } from '@angular/core';
import { User } from "../../models";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor() {}

  login(user: User) {
    localStorage.setItem('angCourseUser', JSON.stringify(user))
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
    console.log(localStorage.getItem('angCourseUser'))
    return JSON.parse(localStorage.getItem('angCourseUser'))
  }
}
