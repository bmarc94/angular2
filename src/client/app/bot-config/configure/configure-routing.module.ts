import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ConfigureComponent } from './configure.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/authentication-guard'



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, canActivate:[AuthGuard], children: [
          { path: 'configure', component: ConfigureComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ConfigureRoutingModule { }