import { Injectable } from '@angular/core';
import { Bot } from './bot'


@Injectable()
export class BotService {

    bots: Bot[] = [{ name: 'first bot' }, { name: 'second bot' }];
    currentBot: Bot;

    getNames() {
        return this.bots.map(bot => {
            return bot.name;
        })
    }

    add(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (name === "") reject("Enter a Name");

            let duplicate = this.bots.filter(bot => {return bot.name === name;}).length;

            if (duplicate) {
                reject('bot ' + name + ' already used');
            }else{
                resolve('bot ' + name + ' successfully created');
                this.bots.push({name:name});
            }
        })
    }

}

