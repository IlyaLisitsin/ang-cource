import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxComponent } from "../search-box/search-box.component";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxSmartModalService } from "ngx-smart-modal";

import { MainContentComponent } from './main-content.component';
import { CourceCollectionComponent } from "../cource-collection/cource-collection.component";
import { CourcePaginationComponent } from "../cource-pagination/cource-pagination.component";
import { TransformDurationPipe } from "../../../pipes/transform-duration.pipe";
import { OrderByPipe } from "../../pipes/order-by-pipe/order-by.pipe";
import { CourceBorderDirective } from "../../directives/cource-border.directive";
import { MockStore } from "../../../shared/mocks/store";


describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        NgxSmartModalService,
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        MainContentComponent,
        SearchBoxComponent,
        CourceCollectionComponent,
        CourcePaginationComponent,
        OrderByPipe,
        TransformDurationPipe,
        CourceBorderDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
