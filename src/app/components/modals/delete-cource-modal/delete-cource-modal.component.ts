import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: 'app-delete-cource-modal',
  templateUrl: './delete-cource-modal.component.html',
  styleUrls: ['./delete-cource-modal.component.css']
})
export class DeleteCourceModalComponent implements OnInit {
  @Input() removeCurrentCource: any
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  confirmCourceRemove(isConfirmed: boolean) {
    if (isConfirmed) {
      this.removeCurrentCource()
    }
    this.ngxSmartModalService.getModal('deleteCourceModal').close()

  }

}
