import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuildComponent } from './build.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/authentication-guard'



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, canActivate:[AuthGuard], children: [
          { path: 'build', component: BuildComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BuildRoutingModule { }