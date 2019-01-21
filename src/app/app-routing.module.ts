import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./shared/services/auth/auth.guard";

import { LoginPageComponent } from "./home/pages/login-page/login-page.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    canActivate: [AuthGuard],
    redirectTo: 'cources',
    pathMatch: 'full'
  },
  // { path: '**',
  //   canActivate: [AuthGuard],
  //   component: PageNotFoundComponent
  // }
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
