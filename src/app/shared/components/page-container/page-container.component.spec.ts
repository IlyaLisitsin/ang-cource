import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerComponent } from './page-container.component';
import { SpinnerComponent } from "../spinner/spinner.component";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {ModalComponent} from "../modal/modal.component";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {BreadcrumbsComponent} from "../breadcrumbs/breadcrumbs.component";
import {NgxSmartModalModule, NgxSmartModalService} from "ngx-smart-modal";
import {Store} from "@ngrx/store";
import {MockStore} from "../../mocks/store";

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        NgxSmartModalModule
      ],
      providers: [
        NgxSmartModalService,
        { provide: Store, useClass: MockStore },
      ],
      declarations: [
        PageContainerComponent,
        SpinnerComponent,
        HeaderComponent,
        FooterComponent,
        ModalComponent,
        BreadcrumbsComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
