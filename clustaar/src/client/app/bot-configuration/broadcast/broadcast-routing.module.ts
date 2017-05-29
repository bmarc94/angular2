import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BroadcastComponent } from './broadcast.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'broadcast', component: BroadcastComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BroadcastRoutingModule { }