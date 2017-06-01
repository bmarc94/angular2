import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message/message.service';
import { BotService } from '../shared/bot/bot.service';


@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newBotName: string = '';
  botNames: string[] = [];

  constructor(private messageService: MessageService, private botService: BotService) { }

  ngOnInit() {
    this.getBotNames();
  }

  getBotNames() {
    this.botNames = this.botService.getNames();
  }

  addBot(): boolean {
    this.botService.add(this.newBotName)
      .then(message => {
        this.messageService.success(message);
        this.botNames.push(this.newBotName);
      }).catch(message => {
        this.messageService.error(message);
      });
    return false;
  }

}
