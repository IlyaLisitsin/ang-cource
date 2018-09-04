import { Component, OnInit } from '@angular/core';

interface Cource {
  id: number
  title: string
  creation: string
  duration: number
  description: string
}

const courceCollection = [
  { id: 23, title: 'Title 1', creation: '07.05.2012', duration: 21, description: 'Description 1' },
  { id: 23, title: 'Title 2', creation: '12.07.2015', duration: 41, description: 'Description 2' },
  { id: 23, title: 'Title 3', creation: '21.03.2014', duration: 25, description: 'Description 3' },
  { id: 23, title: 'Title 4', creation: '20.01.2011', duration: 56, description: 'Description 4' },
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

  searchClick = () => console.log('Search clicked')

  addCourceClick = () => console.log('Add cource clicked')

}
