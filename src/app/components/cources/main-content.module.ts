import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourceComponent } from "./components/add-cource/add-cource.component";
import { EditCourceComponent } from "./components/edit-cource/edit-cource.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { CourceCollectionComponent } from "./components/cource-collection/cource-collection.component";
import { FormsModule } from '@angular/forms';
import { TransformDurationPipe } from "../../pipes/transform-duration.pipe";
import { OrderByPipe} from "./pipes/order-by-pipe/order-by.pipe";
import { DeleteCourceModalComponent } from "../modals/delete-cource-modal/delete-cource-modal.component";
import { RouterModule} from "@angular/router";
import { CourceBorderDirective } from "./directives/cource-border.directive";
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MainContentRoutingModule } from "./main-content-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainContentRoutingModule,
    RouterModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    EditCourceComponent,
    AddCourceComponent,
    MainContentComponent,
    CourceCollectionComponent,
    DeleteCourceModalComponent,
    TransformDurationPipe,
    OrderByPipe,
    CourceBorderDirective,
  ]
})
export class MainContentModule { }
