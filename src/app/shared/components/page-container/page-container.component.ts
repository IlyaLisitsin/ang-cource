import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { getSpinnerShowFlag, State} from "../../store/reducers/ui";

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  isSpinnerVisible$: Observable<boolean>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isSpinnerVisible$ = this.store.select(getSpinnerShowFlag)
  }

}
