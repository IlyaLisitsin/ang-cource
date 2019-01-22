import { ChangeDetectorRef, Component, OnInit, AfterViewChecked } from '@angular/core';
import {Observable, of} from "rxjs";
import { Store } from "@ngrx/store";

import { getSpinnerShowFlag, State} from "../../store/reducers/ui";

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, AfterViewChecked {
  isSpinnerVisible$: Observable<boolean> = of(false);

  constructor(
    private store: Store<State>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.isSpinnerVisible$ = this.store.select(getSpinnerShowFlag);
    this.cd.detectChanges();
  }
}
