import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newBotName: string = '';
  botNames: string[] = [];

  constructor() { }

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
      } else {
        alert('name ' + this.newBotName + 'alrady used')
      }
    }else{
      alert('need a name')
    }


    return false;
  }

}
