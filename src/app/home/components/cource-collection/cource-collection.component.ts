import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";

import { Cource } from '../../models';
import { CourceService } from "../../services/cource.service";
import { Store } from "@ngrx/store";
import { State } from "../../../store/reducers";

import * as UIActions from '../../../shared/store/actions/ui';
import * as CourceActions from '../../store/actions/cources'
import { getCourcesList } from "../../store/reducers/cources";

@Component({
  selector: 'app-cource-collection',
  templateUrl: './cource-collection.component.html',
  styleUrls: ['./cource-collection.component.scss']
})

export class CourceCollectionComponent implements OnInit {
  courcesCollection: Cource[] = [];
  indexToRemove: number;
  @Input() filterConditionFromInput: string;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private courceService: CourceService,
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.store.select(getCourcesList).subscribe(courcesList => this.courcesCollection = courcesList)
  }

  openRemoveModal(index) {
    this.indexToRemove = index;
    this.store.dispatch(new UIActions.ShowModal({
      heading: 'Are you sure?',
      content: 'This action is not revertable',
      buttons: [
        { buttonText: 'Remove', callback: () => this.store.dispatch(new CourceActions.RemoveCource(this.indexToRemove)) }
      ]
    }));
  }

}
