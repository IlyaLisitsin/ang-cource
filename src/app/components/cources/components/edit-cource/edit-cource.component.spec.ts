import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourceComponent } from './edit-cource.component';

describe('EditCourceComponent', () => {
  let component: EditCourceComponent;
  let fixture: ComponentFixture<EditCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
