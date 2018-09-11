import { Injectable } from '@angular/core';
import { Cource } from '../models/cource.model'

const courcesCollection = [
  { id: 1, title: 'Title 3', creation: new Date(2018, 7,20), duration: 95, description: 'Description 3', topRated: true },
  { id: 2, title: 'Title 3', creation: new Date(2018, 7,20), duration: 35, description: 'Description 3', topRated: false },
  { id: 3, title: 'Title 2', creation: new Date(2018, 9,7), duration: 55, description: 'Description 2', topRated: false },
  { id: 4, title: 'Title 3', creation: new Date(2018, 8,6), duration: 135, description: 'Description 3', topRated: false },
  { id: 5, title: 'Title 3', creation: new Date(2018, 7,20), duration: 235, description: 'Description 3', topRated: false },
  { id: 6, title: 'Title 3', creation: new Date(2018, 7,24), duration: 45, description: 'Description 3', topRated: true },
  { id: 7, title: 'Title 3', creation: new Date(2018, 7,25), duration: 65, description: 'Description 3', topRated: true },
  { id: 8, title: 'Title 4', creation: new Date(2011, 1,20), duration: 125, description: 'Description 4', topRated: false },
  { id: 9, title: 'Title 1', creation: new Date(2018, 8,15), duration: 432, description: 'Description 1', topRated: false },
]

@Injectable({
  providedIn: 'root'
})

export class CourceService {
  courcesCollection: Array<Cource>

  constructor() {
    this.courcesCollection = courcesCollection
    console.log(this.courcesCollection)
  }

  getCources(): Array<Cource> {
    return this.courcesCollection
  }

  createCource(newCource: Cource) {
    return this.courcesCollection.push(newCource)
  }

  getItemById(id: number): Cource {
    return this.courcesCollection.filter(cource => cource.id === id)[0]
  }

  removeItem(id: number): void {
    console.log(this.courcesCollection, id)
    this.courcesCollection = this.courcesCollection.filter(cource => cource.id !== id)
    console.log(this.courcesCollection)
  }
}
