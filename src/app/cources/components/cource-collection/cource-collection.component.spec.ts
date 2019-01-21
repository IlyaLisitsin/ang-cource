import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceCollectionComponent } from './cource-collection.component';

describe('CourceCollectionComponent', () => {
  let component: CourceCollectionComponent;
  let fixture: ComponentFixture<CourceCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
