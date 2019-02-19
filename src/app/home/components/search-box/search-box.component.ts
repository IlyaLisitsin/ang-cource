import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { Cource } from "../../models";


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  resultCourcesList: Array<Cource> = [];
  loading: boolean = false;

  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.modelChanged.pipe(
      debounceTime(300),
      tap(() => this.loading = true),
      distinctUntilChanged(),
    ).subscribe((inputText: string) => {

      this.httpClient.get(`http://localhost:8080/api/cources/search?query=${inputText}`).pipe(
      ).subscribe(
        // @ts-ignore
        ({ courcesSearchResults }) => {
          this.loading = false;
          this.resultCourcesList = courcesSearchResults;
        }
      )
    })
  }

  searchChangeHandler(value: string): void {
    if (!value) {
      this.resultCourcesList = [];
      return;
    }

    this.modelChanged.next(value)
  }

}
