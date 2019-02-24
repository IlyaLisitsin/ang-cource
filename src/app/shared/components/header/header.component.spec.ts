import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { MockStore } from "../../mocks/store";
import { RouterTestingModule } from "@angular/router/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        HeaderComponent,
        BreadcrumbsComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
