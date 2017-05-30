import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MessageComponent,
    ToolbarComponent],
  exports: [
    CommonModule,
    MessageComponent,
    ToolbarComponent,
    RouterModule
  ],
  providers: [
    MessageService
  ]
})

export class SharedModule {}
