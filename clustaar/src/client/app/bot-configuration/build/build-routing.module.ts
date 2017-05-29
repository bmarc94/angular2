import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuildComponent } from './build.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'build', component: BuildComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BuildRoutingModule { }