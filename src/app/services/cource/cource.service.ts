import { Injectable } from '@angular/core';
import { Cource } from '../../models/cource.model'
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { finalize, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  testList: Cource[]

  constructor(
    private httpClient: HttpClient
  ) {
  }

  fetchCources() {
    return this.httpClient.get('http://localhost:8080/api/getUsername').pipe(
      map(cources => cources),
      finalize(() => console.log('fetch is finfished'))
    )
  }

  createCource(newCource: Cource) {
    return this.courcesCollection.push(newCource)
  }

  getItemById(id: number): Cource {
    return this.courcesCollection.filter(cource => cource.id === id)[0]
  }

  removeItem(id: number): void {
    this.courcesCollection = this.courcesCollection.filter(cource => cource.id !== id)
  }
}
