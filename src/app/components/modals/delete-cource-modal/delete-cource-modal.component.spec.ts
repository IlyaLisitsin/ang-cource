import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourceModalComponent } from './delete-cource-modal.component';

describe('DeleteCourceModalComponent', () => {
  let component: DeleteCourceModalComponent;
  let fixture: ComponentFixture<DeleteCourceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCourceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
