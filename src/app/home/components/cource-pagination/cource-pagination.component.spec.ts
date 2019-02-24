import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcePaginationComponent } from './cource-pagination.component';
import {Store} from "@ngrx/store";
import {MockStore} from "../../../shared/mocks/store";

describe('CourcePaginationComponent', () => {
  let component: CourcePaginationComponent;
  let fixture: ComponentFixture<CourcePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcePaginationComponent ],
      providers: [
        { provide: Store, useClass: MockStore },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
