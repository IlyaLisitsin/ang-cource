import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CourceBorderDirective } from './directives/cource-border.directive';
import { TransformDurationPipe } from './pipes/transform-duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DeleteCourceModalComponent } from './components/modals/delete-cource-modal/delete-cource-modal.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CourceCollectionComponent } from './components/cource-collection/cource-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddCourceComponent } from './components/add-cource/add-cource.component';
import { EditCourceComponent } from './components/edit-cource/edit-cource.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    MainContentComponent,
    CourceBorderDirective,
    TransformDurationPipe,
    OrderByPipe,
    DeleteCourceModalComponent,
    LoginPageComponent,
    CourceCollectionComponent,
    PageNotFoundComponent,
    AddCourceComponent,
    EditCourceComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
