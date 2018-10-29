import { Injectable } from '@angular/core';
import { Cource } from '../../models'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  private _cources: BehaviorSubject<any> = new BehaviorSubject(Cource)

  constructor(
    private httpClient: HttpClient
  ) {
    this.fethInitialCourceList()
  }

  get getCourcesList() {
    return this._cources
  }

  fethInitialCourceList() {
    this.httpClient.get('http://localhost:8080/api/getUsername').pipe(
      finalize(() => console.log('FETCH IS FINISHED'))
    ).subscribe(
      res => {
        this._cources.next(res['courcesList'])
      }
    )
  }

  // createCource(newCource: Cource) {
  //   return this.courcesCollection.push(newCource)
  // }
  //
  // getItemById(id: number): Cource {
  //   return this.courcesCollection.filter(cource => cource.id === id)[0]
  // }
  //
  // removeItem(id: number): void {
  //   this.courcesCollection = this.courcesCollection.filter(cource => cource.id !== id)
  // }

}
