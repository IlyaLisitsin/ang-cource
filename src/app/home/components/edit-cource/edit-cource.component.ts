import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as CourceActions from '../../store/actions/cources';
import { State } from "../../store/reducers/cources";

@Component({
  selector: 'app-edit-cource',
  templateUrl: './edit-cource.component.html',
  styleUrls: ['./edit-cource.component.css']
})

export class EditCourceComponent implements OnInit {
  cource$: Observable<object>;
  cource: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private store: Store<State>,
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.courceSrv.getParticularCource(id).subscribe(
    //   res => this.cource = res
    // )

    this.cource$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.httpClient.get(`http://localhost:8080/api/cources/${params.get('id')}`),
      ),
    );

    this.cource$.subscribe(
      cource => this.cource = cource
    )

  }

  saveChanges() {
    this.store.dispatch(new CourceActions.AddCource({
      id: this.cource.id,
      title: this.cource.title,
      creation: new Date(String(this.cource.creation)),
      topRated: this.cource.topRated,
      duration: this.cource.duration,
      description: this.cource.description,
    }));

    this.router.navigate(['../'])
  }

}
