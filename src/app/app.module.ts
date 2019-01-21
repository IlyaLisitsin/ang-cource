import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";

import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';
import { LoginPageComponent } from "./home/pages/login-page/login-page.component";
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from "./home/pages/page-not-found/page-not-found.component";
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
    HomeModule,
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
