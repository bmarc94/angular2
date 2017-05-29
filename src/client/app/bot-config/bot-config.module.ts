import { NgModule } from '@angular/core';

import { AiSetupModule } from './ai-setup/ai-setup.module';
import { AnalyzeModule } from './analyze/analyze.module';
import { BroadcastModule } from './broadcast/broadcast.module';
import { BuildModule } from './build/build.module';
import { ConfigureModule } from './configure/configure.module';
import { GrowModule } from './grow/grow.module';


@NgModule({
  imports: [
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

export class BotConfigModule { }