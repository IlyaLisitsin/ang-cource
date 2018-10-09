import { Component, OnInit, Input } from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {CourceService} from "../../services";

@Component({
  selector: 'app-cource-collection',
  templateUrl: './cource-collection.component.html',
  styleUrls: ['./cource-collection.component.scss']
})
export class CourceCollectionComponent implements OnInit {
  @Input() courcesCollection: any;
  activeModalCourceId: number;
  courceRemove: any

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private courceService: CourceService,
  ) {}

  ngOnInit() {
    this.courceRemove = this.courceService.removeItem
  }

  openModal(index) {
    this.activeModalCourceId = this.courcesCollection[index].id
    this.ngxSmartModalService.getModal('deleteCourceModal').open()
  }

  removeCurrentCource() {
    return () => this.courceRemove(this.activeModalCourceId)
  }

}
