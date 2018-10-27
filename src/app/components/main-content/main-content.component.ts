import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cource } from "../../models";
import { CourceService } from "../../services";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  @Input() isAuth: boolean;
  @Output() loginFromLoginPage = new EventEmitter()

  courcesCollection: Array<Cource> = []
  filterConditionFromInput: string

  constructor(
    private courceService: CourceService,
  ) {}


  ngOnInit() {
    this.courceService.fetchCources().subscribe(data => {
      this.courcesCollection = data.courcesCollection
    })
  }

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => console.log('Add cource clicked')
}
