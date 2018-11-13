import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cource } from '../../models';
import { CourceService } from '../../services';

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
  url: string;

  constructor(
    private courceService: CourceService,
  ) {}


  ngOnInit() {
    this.courceService.getCourcesList.forEach(value => {
      this.courcesCollection = value
    })

    this.courceService.downloadCourseListJSON$().subscribe(data => data.blob()
      .then(res => {
        this.url = window.URL.createObjectURL(res);
      }))
  }

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => {
    const cource = {
      'id': 1,
      'title': 'AAAAAAAAAAA',
      'creation': 'Mon Aug 20 2018 00:00:00 GMT+0300 (Moscow Standard Time)',
      'duration': 95, 'description': 'ooooooooooooooooo',
      'topRated': true
    };

    this.courceService.addCource(cource)
  }
}
