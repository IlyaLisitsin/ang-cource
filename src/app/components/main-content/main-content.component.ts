import { Component, OnInit } from '@angular/core';

interface Cource {
  id: number
  title: string
  creation: any
  duration: number
  description: string
  topRated?: boolean
}

const courceCollection = [
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: 95, description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: 35, description: 'Description 3', topRated: false },
  { id: 23, title: 'Title 2', creation: new Date(2018, 9,7), duration: 55, description: 'Description 2', topRated: false },
  { id: 23, title: 'Title 3', creation: new Date(2018, 8,6), duration: 135, description: 'Description 3', topRated: false },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: 235, description: 'Description 3', topRated: false },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,24), duration: 45, description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,25), duration: 65, description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 4', creation: new Date(2011, 1,20), duration: 125, description: 'Description 4', topRated: false },
  { id: 23, title: 'Title 1', creation: new Date(2018, 8,15), duration: 432, description: 'Description 1', topRated: false },
]

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  courceCollection: Array<Cource>
  filterConditionFromInput: string

  constructor() {
    this.courceCollection = courceCollection
  }

  ngOnInit() {}

  buttonClick = (inputValue) => this.filterConditionFromInput = inputValue

  addCourceClick = () => console.log('Add cource clicked')

}
