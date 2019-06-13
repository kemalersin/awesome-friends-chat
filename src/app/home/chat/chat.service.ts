import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { IContact } from '../contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  @Output() contactEmitter: EventEmitter<IContact> = new EventEmitter();

  constructor() {}

  selectContact(contact: IContact) {
    this.contactEmitter.emit(contact);
  }

  getContact(): Observable<IContact> {
    return this.contactEmitter;
  }
}
