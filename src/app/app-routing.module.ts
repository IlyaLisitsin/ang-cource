import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./auth/auth.guard";

import { LoginPageComponent } from "./components/login-page/login-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { AddCourceComponent } from "./components/add-cource/add-cource.component";
import { EditCourceComponent } from "./components/edit-cource/edit-cource.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'cources/:id',
    canActivate: [AuthGuard],
    component: EditCourceComponent,
  },
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
  { path: '',
    canActivate: [AuthGuard],
    redirectTo: '/cources',
    pathMatch: 'full'
  },
  { path: '**',
    canActivate: [AuthGuard],
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
