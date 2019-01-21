import { RouterModule, Routes } from "@angular/router";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { AuthGuard } from "../shared/services/auth/auth.guard";
import { EditCourceComponent } from "./components/edit-cource/edit-cource.component";
import { AddCourceComponent } from "./components/add-cource/add-cource.component";
import { NgModule } from "@angular/core";


const mainContentRoutes: Routes = [
  {
    path: 'cources',
    canActivate: [AuthGuard],
    component: MainContentComponent,
  },
  {
    path: 'cources/add',
    canActivate: [AuthGuard],
    component: AddCourceComponent,
  },
  {
    path: 'cources/:id',
    canActivate: [AuthGuard],
    component: EditCourceComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainContentRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule { }
