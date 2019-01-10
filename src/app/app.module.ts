import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";

import { MainContentModule } from "./components/cources/main-content.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorModalComponent } from './components/modals/error-modal/error-modal.component';
import { AppStoreModule } from "./app-store.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppStoreModule,
    SharedModule,
    RouterModule,
    MainContentModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    ErrorModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
