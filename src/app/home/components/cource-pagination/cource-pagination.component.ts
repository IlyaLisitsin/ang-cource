import {Component, Input, OnInit} from '@angular/core';
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
  totalPages: Array<any>;
  currentPage: number;

  // pagesToShow: Array<any>;

  @Input() size: number = 3;

  constructor(
    private store: Store<State>,
  ) { }

  pageClick(index: number) {

    this.store.dispatch(new CourcesActions.FetchCources(index))
  }

  ngOnInit() {
    this.store.select(getPaginationData).subscribe((paginationData: PageInfo) => {
      const { totalPages, currentPage } = paginationData;

      this.totalPages = new Array(totalPages + 1);
      this.currentPage = currentPage;
    })
  }

}
