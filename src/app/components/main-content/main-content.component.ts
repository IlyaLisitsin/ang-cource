import { Component, OnInit } from '@angular/core';
import { Cource } from "../../models";
import { CourceService } from "../../services/cource.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  courcesCollection: Array<Cource>
  filterConditionFromInput: string
  courceRemove: any

  constructor(private courceService: CourceService) {
    this.courcesCollection = courceService.getCources()
    this.courceRemove = courceService.removeItem
  }

  ngOnInit() {}

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => console.log('Add cource clicked')

  removeCourceClick(index) {
    this.courceRemove(this.courcesCollection[index].id)
  }

}
