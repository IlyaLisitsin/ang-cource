import { Component, OnInit } from '@angular/core';
import { Cource } from "../../models";
import { CourceService, AuthorizationService } from "../../services";
import { NgxSmartModalService } from 'ngx-smart-modal';
import {a} from "@angular/core/src/render3";

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
  isAuth: boolean

  constructor(
    private courceService: CourceService,
    private authService: AuthorizationService,
    public ngxSmartModalService: NgxSmartModalService
  ) {
    this.courcesCollection = courceService.getCources()
    this.courceRemove = courceService.removeItem

    this.isAuth = authService.isAuthenticated()
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
