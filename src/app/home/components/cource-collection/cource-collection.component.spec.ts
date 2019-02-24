import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";
import { Store } from "@ngrx/store";

import { CourcePaginationComponent } from "../cource-pagination/cource-pagination.component";
import { OrderByPipe } from "../../pipes/order-by-pipe/order-by.pipe";
import { TransformDurationPipe } from "../../../pipes/transform-duration.pipe";
import { CourceBorderDirective } from "../../directives/cource-border.directive";
import { CourceCollectionComponent } from './cource-collection.component';
import { MockStore } from "../../../shared/mocks/store";

describe('CourceCollectionComponent', () => {
  let component: CourceCollectionComponent;
  let fixture: ComponentFixture<CourceCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
      ],
      providers: [
        NgxSmartModalService,
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        CourceCollectionComponent,
        OrderByPipe,
        TransformDurationPipe,
        CourceBorderDirective,
        CourcePaginationComponent,
      ]
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
