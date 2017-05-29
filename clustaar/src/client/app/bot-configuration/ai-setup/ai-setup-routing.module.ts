import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AiSetupComponent } from './ai-setup.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'ai-setup', component: AiSetupComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AiSetupRoutingModule { }