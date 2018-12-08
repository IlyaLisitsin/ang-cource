import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourceComponent } from './add-cource.component';

describe('AddCourceComponent', () => {
  let component: AddCourceComponent;
  let fixture: ComponentFixture<AddCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
