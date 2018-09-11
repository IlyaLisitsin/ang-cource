import { Component, OnInit } from '@angular/core';
import { Cource } from "../../models";
import { CourceService } from "../../services";
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  courcesCollection: Array<Cource>
  filterConditionFromInput: string
  activeModalCourceId: number
  courceRemove: any

  constructor(
    private courceService: CourceService,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.courcesCollection = courceService.getCources()
    this.courceRemove = courceService.removeItem
  }

  ngOnInit() {}

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => console.log('Add cource clicked')

  removeCurrentCource() {
    return () => this.courceRemove(this.activeModalCourceId)
  }

  openModal(index) {
    this.activeModalCourceId = this.courcesCollection[index].id
    this.ngxSmartModalService.getModal('deleteCourceModal').open()
  }

}
