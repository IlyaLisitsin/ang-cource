import { Injectable } from '@angular/core';
import { Cource } from '../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { NgxSmartModalService } from "ngx-smart-modal";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private cources$: BehaviorSubject<object> = new BehaviorSubject(Cource)

  constructor(
    private httpClient: HttpClient,
    public ngxSmartModalService: NgxSmartModalService,
  ) {
    this.fethCourceList()
  }

  get getCourcesList() {
    return this.cources$
  }

  fethCourceList() {
    this.httpClient.get('http://localhost:8080/api/cources').pipe(
      catchError(error => {
        this.ngxSmartModalService.setModalData({ data: error.message }, 'errorModal');
        this.ngxSmartModalService.getModal('errorModal').open()
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

  removeCource(id: any) {
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
