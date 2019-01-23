import { Component, Input, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import * as CourcesActions from '../../store/actions/cources'
import { State } from "../../../store/reducers";
import { getPaginationData } from "../../store/reducers/cources";
import { PageInfo } from "../../models";

@Component({
  selector: 'app-cource-pagination',
  templateUrl: './cource-pagination.component.html',
  styleUrls: ['./cource-pagination.component.scss']
})

export class CourcePaginationComponent implements OnInit {
  totalPages: number;
  currentPage: number;

  pagesToShow: Array<number> = [];

  @Input() size: number;

  constructor(
    private store: Store<State>,
  ) { }

  pageClick(index: number) {
    this.store.dispatch(new CourcesActions.FetchCources(index))
  }

  ngOnInit() {
    this.store.select(getPaginationData).subscribe((paginationData: PageInfo) => {
      const { totalPages, currentPage } = paginationData;
      this.totalPages = totalPages;
      this.currentPage = currentPage;
      this.pagesToShowFormer()
    })
  }

  private pagesToShowFormer(): void {
    this.pagesToShow = [];

    const offset = Math.floor(this.size / 2);
    let start = this.currentPage - offset <= 0 ? 1 : this.currentPage - offset;
    let end = start + this.size;
    if (end > this.totalPages) end = this.totalPages + 1;

    if (this.currentPage === this.totalPages) start--;

    while (start < end) {
      this.pagesToShow.push(start);
      start++
    }

  }

}
