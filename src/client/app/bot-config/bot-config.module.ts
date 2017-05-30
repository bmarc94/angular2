import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AiSetupModule } from './ai-setup/ai-setup.module';
import { AnalyzeModule } from './analyze/analyze.module';
import { BroadcastModule } from './broadcast/broadcast.module';
import { BuildModule } from './build/build.module';
import { ConfigureModule } from './configure/configure.module';
import { GrowModule } from './grow/grow.module';
import { SharedModule } from '../shared/shared.modules';
import { ConfigRoutingModule }from './bot-config-routing.module'

import { LayoutComponent } from './layout/layout.component';



@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    AiSetupModule,
    AnalyzeModule,
    BroadcastModule,
    BuildModule,
    ConfigureModule,
    GrowModule,
    ConfigRoutingModule
   ],
  declarations: [LayoutComponent],
  exports: []
})

export class BotConfigModule { }