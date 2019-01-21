import { Injectable } from '@angular/core';
import { Cource } from '../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { Store } from "@ngrx/store";
import { State } from "../../shared/store/reducers";

import * as UIActions from '../../shared/store/actions/ui'

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private cources$: BehaviorSubject<object> = new BehaviorSubject(Cource)

  constructor(
    private httpClient: HttpClient,
    private store: Store<State>,
  ) {
    this.fethCourceList()
  }

  get getCourcesList() {
    return this.cources$
  }

  fethCourceList() {
    this.httpClient.get('http://localhost:8080/api/cources').pipe(
      catchError(error => {
        this.store.dispatch(new UIActions.ShowModal({ heading: 'Ha! Errrrorus!', content: error.message }))
        return of(error.message)
      })
    ).subscribe(
      res => {
        this.cources$.next(res['courcesList'])
      }
    )
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

  removeCource(id: string) {
    this.httpClient.delete(`http://localhost:8080/api/cources/${id}`)
      .subscribe(
        res => this.cources$.next(res['courcesList'])
      )
  }

  get downloadCourseListJSON$() {
    const jsonGet$ = fromPromise(fetch('http://localhost:8080/api/cources'));
    return jsonGet$
  }
}
