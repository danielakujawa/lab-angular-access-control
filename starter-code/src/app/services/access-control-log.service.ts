import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<object> = [{
    person: String,
    message: String,
    createdAt: Date
  }];

  addAccessItem(person: string, message: string): void {

    if (!person || !message) {
      throw new Error('Person and message must be defined');
    }
    const item = {
      person : person,
      message : message,
      createdAt: new Date()
    };

    this.logMessages.push(item);
  }

  getAccessLog() {
    return this.logMessages;
  }

}
