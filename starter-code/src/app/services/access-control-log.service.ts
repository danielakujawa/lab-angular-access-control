import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<object> = [{
    person: String,
    message: String,
    createdAt: Date
  }];

  addAccessItem(person, message){

    if (!person || !message) {
      return false;
    }
    const item = {
      person : person,
      message : message,
      createdAt: new Date()
    };

    this.logMessages.push(item);
    console.log(this.logMessages);
    return true;
  }

  getAccessLog() {
    return this.logMessages;
  }



  constructor() { }

}
