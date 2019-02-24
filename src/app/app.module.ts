import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
