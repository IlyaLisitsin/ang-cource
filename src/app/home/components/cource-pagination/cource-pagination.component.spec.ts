import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcePaginationComponent } from './cource-pagination.component';

describe('CourcePaginationComponent', () => {
  let component: CourcePaginationComponent;
  let fixture: ComponentFixture<CourcePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcePaginationComponent ]
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
