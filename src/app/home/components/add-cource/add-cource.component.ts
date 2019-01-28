import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import * as CourceActions from "../../store/actions/cources";
import { State } from "../../store/reducers/cources";

@Component({
  selector: 'app-add-cource',
  templateUrl: './add-cource.component.html',
  styleUrls: ['./add-cource.component.css']
})
export class AddCourceComponent implements OnInit {
  duration: number = 0;
  title: string = '';
  description: string = '';
  date: string = '';

  constructor(
    private store: Store<State>,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  addNewCource() {
    const cource = {
      id: String(Math.random()),
      title: this.title,
      creation: new Date(this.date),
      duration: String(this.duration),
      description: this.description,
      topRated: true
    };

    this.store.dispatch(new CourceActions.AddCource(cource));
    this.router.navigate(['../'])
  }
}
