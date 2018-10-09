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
  isAuth: boolean

  constructor(
    private courceService: CourceService,
    private authService: AuthorizationService,
  ) {}


  ngOnInit() {
    this.courcesCollection = this.courceService.getCources()

    this.isAuth = this.authService.isAuthenticated()
  }

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => console.log('Add cource clicked')

}
