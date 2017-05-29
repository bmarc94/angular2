import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GrowComponent } from './grow.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'grow', component: GrowComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class GrowRoutingModule { }