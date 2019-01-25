import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourceComponent } from "./components/add-cource/add-cource.component";
import { EditCourceComponent } from "./components/edit-cource/edit-cource.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { CourceCollectionComponent } from "./components/cource-collection/cource-collection.component";
import { FormsModule } from '@angular/forms';
import { TransformDurationPipe } from "../pipes/transform-duration.pipe";
import { OrderByPipe} from "./pipes/order-by-pipe/order-by.pipe";
import { RouterModule} from "@angular/router";
import { CourceBorderDirective } from "./directives/cource-border.directive";
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HomeRoutingModule } from "./home-routing.module";
import { CourcePaginationComponent } from './components/cource-pagination/cource-pagination.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    EditCourceComponent,
    AddCourceComponent,
    MainContentComponent,
    CourceCollectionComponent,
    TransformDurationPipe,
    OrderByPipe,
    CourceBorderDirective,
    CourcePaginationComponent,
    SearchBoxComponent,
  ]
})
export class HomeModule { }
