import { Injectable } from '@angular/core';
import { Cource } from '../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private cources$: BehaviorSubject<object> = new BehaviorSubject(Cource);

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getParticularCource(id) {
    return this.httpClient.get(`http://localhost:8080/api/cources/${id}`)
  }

  addCource(newCource: Cource) {
    this.httpClient.put('http://localhost:8080/api/cources', newCource)
      .subscribe(
        res => this.cources$.next(res['courcesList'])
      )
  }

  get downloadCourseListJSON$() {
    const jsonGet$ = fromPromise(fetch('http://localhost:8080/api/cources'));
    return jsonGet$
  }
}
