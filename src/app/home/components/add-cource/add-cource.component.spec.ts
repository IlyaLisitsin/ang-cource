import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";

import { AddCourceComponent } from './add-cource.component';
import { OrderByPipe } from "../../pipes/order-by-pipe/order-by.pipe";
import { TransformDurationPipe } from "../../../pipes/transform-duration.pipe";
import { MockStore } from "../../../shared/mocks/store";

describe('AddCourceComponent', () => {
  let component: AddCourceComponent;
  let fixture: ComponentFixture<AddCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        AddCourceComponent,
        OrderByPipe,
        TransformDurationPipe
      ],
      providers: [
        { provide: Store, useClass: MockStore },
      ],
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
