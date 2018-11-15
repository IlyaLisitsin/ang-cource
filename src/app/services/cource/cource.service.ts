import { Injectable } from '@angular/core';
import { Cource } from '../../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private _cources: BehaviorSubject<object> = new BehaviorSubject(Cource)

  constructor(
    private httpClient: HttpClient
  ) {
    this.fethCourceList()
  }

  get getCourcesList() {
    return this._cources
  }

  fethCourceList() {
    this.httpClient.get('http://localhost:8080/api/getCourceList').pipe(
      catchError(err => {
        return of(err.message)
      })
    ).subscribe(
      res => {
        if (typeof res === 'string') {
          this._cources.next([{
              title: res
            }])
          this._cources.complete()
        }
        this._cources.next(res['courcesList'])
      }
    )
  }

  addCource(newCource: Cource) {
    this.httpClient.put('http://localhost:8080/api/addCource', newCource)
      .subscribe(
        res => this._cources.next(res['courcesList'])
      )
  }

  removeCource(idToRemove: any) {
    this.httpClient.delete(`http://localhost:8080/api/removeCource/${idToRemove}`)
      .subscribe(
        res => this._cources.next(res['courcesList'])
      )
  }

  get downloadCourseListJSON$() {
    const jsonGet$ = fromPromise(fetch('http://localhost:8080/api/getCourceList'));
    return jsonGet$
  }
}
