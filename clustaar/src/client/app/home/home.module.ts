import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ChatBotListService } from '../shared/chatbot-list/chatbot-list.service';
import { AuthGuard } from '../shared/authentication/auth-guard';

import { NavbarComponent } from '../shared/navbar/navbar.component';



@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [ChatBotListService,AuthGuard]
})
export class HomeModule { }
