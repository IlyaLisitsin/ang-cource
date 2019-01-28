import { Injectable } from '@angular/core';
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})

export class CourceService {

  constructor(
  ) {}

  get downloadCourseListJSON$() {
    const jsonGet$ = fromPromise(fetch('http://localhost:8080/api/cources'));
    return jsonGet$
  }
}
