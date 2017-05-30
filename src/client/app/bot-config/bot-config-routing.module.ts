import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from '../shared/authentication/authentication-guard';

import { AiSetupComponent } from './ai-setup/ai-setup.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { BuildComponent } from './build/build.component';
import { ConfigureComponent } from './configure/configure.component';
import { GrowComponent } from './grow/grow.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: LayoutComponent, canActivate: [AuthGuard],
                children: [
                    { path: 'ai-setup', component: AiSetupComponent },
                    { path: 'analyze', component: AnalyzeComponent },
                    { path: 'broadcast', component: BroadcastComponent },
                    { path: 'build', component: BuildComponent },
                    { path: 'configure', component: ConfigureComponent },
                    { path: 'grow', component: GrowComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class ConfigRoutingModule { }