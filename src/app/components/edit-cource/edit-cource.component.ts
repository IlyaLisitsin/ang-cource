import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import { switchMap } from "rxjs/operators";
import {CourceService} from "../../services";

@Component({
  selector: 'app-edit-cource',
  templateUrl: './edit-cource.component.html',
  styleUrls: ['./edit-cource.component.css']
})

export class EditCourceComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('creation') creation: ElementRef;
  @ViewChild('isTopRated') isTopRated: ElementRef;
  @ViewChild('duration') duration: ElementRef;
  @ViewChild('id') id: ElementRef;

  cource$: Observable<object>

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
        this.courceSrv.getParticularCource(params.get('id')),
      )
    )
  }

  saveChanges() {
    this.courceSrv.addCource({
      id: this.id.nativeElement.innerText,
      title: this.title.nativeElement.value,
      creation: String(new Date(this.creation.nativeElement.value)),
      topRated: this.isTopRated.nativeElement.checked,
      duration: this.duration.nativeElement.value,
      description: this.description.nativeElement.value,
    })

    this.router.navigate(['../'])
  }

}
