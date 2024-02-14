import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'auth'
},
{
  path: 'auth',
  loadChildren: () => import('@containers/auth/auth.module').then(m => m.AuthModule),
},
{
  path: 'main',
  loadChildren: () => import('@containers/main/main.module').then(m => m.MainModule),
},
{
  path: '**',
  redirectTo: 'auth'
}];
