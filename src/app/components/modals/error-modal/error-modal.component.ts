import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})

export class ErrorModalComponent implements OnInit {
  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit() {}

  test() {
    console.log('ERR', this.ngxSmartModalService.getModalData('errorModal'))
  }

  closeModal() {
    this.ngxSmartModalService.getModal('errorModal').close()
  }

}
