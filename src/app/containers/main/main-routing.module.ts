import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@containers/main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home'
          },
          {
            path: 'home',
            loadChildren: () => import('@pages/home/home.routes').then(m => m.HomeRoutes),
          },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
