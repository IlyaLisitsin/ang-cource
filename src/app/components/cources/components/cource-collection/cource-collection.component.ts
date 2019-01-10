import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";
import { Cource } from '../../models';
import { CourceService } from "../../services/cource.service";


@Component({
  selector: 'app-cource-collection',
  templateUrl: './cource-collection.component.html',
  styleUrls: ['./cource-collection.component.scss']
})
export class CourceCollectionComponent implements OnInit {
  @Input() courcesCollection: Cource[];
  @Input() filterConditionFromInput: string;
  activeModalCourceId: string;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private courceService: CourceService,
  ) {}

  ngOnInit() {}

  openModal(index) {
    this.activeModalCourceId = this.courcesCollection[index].id
    this.ngxSmartModalService.getModal('deleteCourceModal').open()
  }

  removeCurrentCource() {
    return () => this.courceService.removeCource(this.activeModalCourceId)
  }

}
