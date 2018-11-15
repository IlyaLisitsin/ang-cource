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
      // @ts-ignore
      this.courcesCollection = value
    })

    this.courceService.downloadCourseListJSON$.subscribe(data => data.blob()
      .then(res => {
        this.url = window.URL.createObjectURL(res);
      }))
  }

  startDownload() {
    const link = document.createElement('a')
    link.href = this.url
    document.body.appendChild(link)
    link.setAttribute('download', 'cources.json')
    link.click()
    document.body.removeChild(link)
  }

  buttonClick(inputValue) {
    this.filterConditionFromInput = inputValue
  }

  addCourceClick() {
    const cource = {
      'id': 1,
      'title': 'New cource',
      'creation': 'Mon Aug 20 2018 00:00:00 GMT+0300 (Moscow Standard Time)',
      'duration': 95, 'description': 'Description of new cource',
      'topRated': true
    };

    this.courceService.addCource(cource)
  }
}
