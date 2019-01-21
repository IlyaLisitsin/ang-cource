import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CourceService } from "../../services/cource.service";

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
    private courceSrv: CourceService,
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.courceSrv.getParticularCource(id).subscribe(
    //   res => this.cource = res
    // )

    this.cource$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        {
          return this.courceSrv.getParticularCource(params.get('id'))
        },
      ),
    );

    this.cource$.subscribe(
      cource => this.cource = cource
    )

  }

  saveChanges() {
    this.courceSrv.addCource({
      id: this.cource.id,
      title: this.cource.title,
      creation: new Date(String(this.cource.creation)),
      topRated: this.cource.topRated,
      duration: this.cource.duration,
      description: this.cource.description,
    });

    this.router.navigate(['../'])
  }

}
