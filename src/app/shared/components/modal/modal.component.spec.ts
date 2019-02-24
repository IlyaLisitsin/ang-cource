import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { NgxSmartModalComponent, NgxSmartModalService } from "ngx-smart-modal";
import { Store } from "@ngrx/store";
import { MockStore } from "../../mocks/store";
import { SpinnerComponent } from "../spinner/spinner.component";

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxSmartModalService,
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        ModalComponent,
        NgxSmartModalComponent,
        SpinnerComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
