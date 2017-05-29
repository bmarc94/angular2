import { Component, OnInit } from '@angular/core';
import { ChatBotListService } from '../shared/chatbot-list/chatbot-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newBotName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor(public nameListService: ChatBotListService) {}

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newBotName);
    this.newBotName = '';
    return false;
  }

}
