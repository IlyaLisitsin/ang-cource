import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalService } from "ngx-smart-modal";
import { Store } from "@ngrx/store";
import { filter, map } from "rxjs/operators";

import { ModalData } from "../../models";
import { getModal, State } from "../../store/reducers/ui";

import * as UIActions from '../../store/actions/ui';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  modalData: ModalData;

  @ViewChild('modal') modal: NgxSmartModalComponent;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.select(getModal).pipe(
      filter((modalState) => modalState.show),
      map(modalState => modalState.data),
    ).subscribe((modalData: ModalData) => {
      this.ngxSmartModalService.setModalData(modalData, 'modal');
        this.ngxSmartModalService.getModal('modal').open();
    })
  }

  close() {
    this.store.dispatch(new UIActions.HideModal());
    this.modal.close();
  }

  ngAfterViewInit(): void {
    this.ngxSmartModalService.getModal('modal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      this.modalData = modal.getData();
    });
  }

}
