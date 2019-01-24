import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import {filter, take} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbsCollection: Array<string> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // take(1),
    )
      .subscribe(
      event => this.getCrumbs(event)
    )
  }

  getCrumbs(event) {
    this.breadcrumbsCollection = event.urlAfterRedirects.split('/')
      .filter(el => el)
      .map(crumb => {
      return { path: crumb, clickable: true }
    })
  }

}
