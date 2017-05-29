import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AiSetupModule } from './ai-setup/ai-setup.module';
import { AnalyzeModule } from './analyze/analyze.module';
import { BroadcastModule } from './broadcast/broadcast.module';
import { BuildModule } from './build/build.module';
import { ConfigureModule } from './configure/configure.module';
import { GrowModule } from './grow/grow.module';

//import { BotConfigurationRoutingModule } from './bot-configuration-routing.module'



@NgModule({
  imports: [CommonModule,
    AiSetupModule,
    AnalyzeModule,
    BroadcastModule,
    BuildModule,
    ConfigureModule,
    GrowModule,
   ],
  declarations: [],
  exports: []
})

export class BotConfigurationModule { }