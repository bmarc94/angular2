import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';


@NgModule({
  imports: [CommonModule],
  declarations: [MessageComponent],
  exports: [MessageComponent, CommonModule],
  providers:[MessageService]
})
export class SharedModule {
  
}
