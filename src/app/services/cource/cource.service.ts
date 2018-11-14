import { Injectable } from '@angular/core';
import { Cource } from '../../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private _cources: BehaviorSubject<any> = new BehaviorSubject(Cource)

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
      finalize(() => console.log('FETCH IS FINISHED'))
    ).subscribe(
      res => {
        this._cources.next(res['courcesList'])
      }
    )
  }

  addCource(newCource: Cource) {
    this.httpClient.post('http://localhost:8080/api/addCource', newCource).pipe()
      .subscribe(
        res => this._cources.next(res['courcesList'])
      )
  }

  removeCource(idToRemove: any) {
    this.httpClient.post('http://localhost:8080/api/removeCource', { idToRemove }).pipe()
      .subscribe(
        res => this._cources.next(res['courcesList'])
      )
  }

  get downloadCourseListJSON$() {
    const jsonGet$ = fromPromise(fetch('http://localhost:8080/api/getCourceList'));
    return jsonGet$
  }
}
