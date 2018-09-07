import { Component, OnInit } from '@angular/core';

interface Cource {
  id: number
  title: string
  creation: any
  duration: string
  description: string
  topRated?: boolean
}

const courceCollection = [
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: '1h 28min', description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: '1h 28min', description: 'Description 3' },
  { id: 23, title: 'Title 2', creation: new Date(2018, 9,7), duration: '1h 28min', description: 'Description 2' },
  { id: 23, title: 'Title 3', creation: new Date(2018, 8,6), duration: '1h 28min', description: 'Description 3' },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,20), duration: '1h 28min', description: 'Description 3' },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,24), duration: '1h 28min', description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 3', creation: new Date(2018, 7,25), duration: '1h 28min', description: 'Description 3', topRated: true },
  { id: 23, title: 'Title 4', creation: new Date(2011, 1,20), duration: '1h 28min', description: 'Description 4' },
  { id: 23, title: 'Title 1', creation: new Date(2018, 8,15), duration: '1h 28min', description: 'Description 1' },
]

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  courceCollection: Array<Cource>;

  constructor() {
    this.courceCollection = courceCollection
  }

  ngOnInit() {
  }

  dateString = date => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

  searchClick = () => console.log('Search clicked')

  addCourceClick = () => console.log('Add cource clicked')

}
