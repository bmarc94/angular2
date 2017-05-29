import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigureComponent } from './configure.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'configure', component: ConfigureComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ConfigureRoutingModule { }