import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageContainerComponent } from './components/page-container/page-container.component';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
  ],
  declarations: [
    ModalComponent,
    PageContainerComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SpinnerComponent
  ],
  exports: [
    PageContainerComponent,
 ]
})
export class SharedModule { }
