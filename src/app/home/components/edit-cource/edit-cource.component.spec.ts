import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

import { TransformDurationPipe } from "../../../pipes/transform-duration.pipe";
import { EditCourceComponent } from './edit-cource.component';
import { Store } from "@ngrx/store";
import { MockStore } from "../../../shared/mocks/store";


describe('EditCourceComponent', () => {
  let component: EditCourceComponent;
  let fixture: ComponentFixture<EditCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        EditCourceComponent,
        TransformDurationPipe,
      ]
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
