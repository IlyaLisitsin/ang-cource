import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cource } from '../../models';
import { CourceService } from "../../services/cource.service";
import * as CourcesActions from "../../store/actions/cources";
import {Store} from "@ngrx/store";
import {State} from "../../../store/reducers";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  @Input() isAuth: boolean;
  @Input() isAddCource: boolean;
  @Output() loginFromLoginPage = new EventEmitter();

  // courcesCollection: Array<Cource> = [];
  filterConditionFromInput: string;
  url: string;

  constructor(
    private courceService: CourceService,
    private store: Store<State>,
  ) {}


  ngOnInit() {
    // this.courceService.getCourcesList.forEach(value => {
    //   // @ts-ignore
    //   this.courcesCollection = value
    // });

    this.store.dispatch(new CourcesActions.FetchCources());

    this.courceService.downloadCourseListJSON$.subscribe(data => data.blob()
      .then(res => {
        this.url = window.URL.createObjectURL(res);
      }))
  }

  startDownload() {
    const link = document.createElement('a');
    link.href = this.url;
    document.body.appendChild(link);
    link.setAttribute('download', 'cources.json');
    link.click();
    document.body.removeChild(link);
  }

  buttonClick(inputValue) {
    this.filterConditionFromInput = inputValue;
  }

}
