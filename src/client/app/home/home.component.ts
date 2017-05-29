import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message/message.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newBotName: string = '';
  botNames: string[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    // TODO: implement botService
    this.botNames = ['first bot', 'second bot'];
  }

  addName(): boolean {
    // TODO: implement botService
    // TODO: implement alertService
    if (this.newBotName !== "") {
      if (this.botNames.indexOf(this.newBotName) === -1) {
        this.botNames.push(this.newBotName);
        this.messageService.success('bot ' + this.newBotName + ' successfully created');
      } else {
        this.messageService.error('bot ' + this.newBotName + 'already used');
      }
    } else {
      this.messageService.error('need a name')
    }


    return false;
  }

}
