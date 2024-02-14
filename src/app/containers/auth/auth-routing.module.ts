import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from '@containers/auth/auth.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
