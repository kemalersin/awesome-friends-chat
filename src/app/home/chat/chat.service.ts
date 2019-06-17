import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IContact } from '../contact/contact';
import { IConversation } from './conversation';

const routes = {
  conversation: (id: number) => `/conversations/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  @Output() contactEmitter: EventEmitter<IContact> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  selectContact(contact: IContact) {
    this.contactEmitter.emit(contact);
  }

  getContact(): Observable<IContact> {
    return this.contactEmitter;
  }

  getConversation(id: number): Observable<IConversation> {
    return this.httpClient
      .cache()
      .get(routes.conversation(id))
      .pipe(
        map((conversation: any) => conversation),
        catchError(() => of('Could not load conversation.'))
      );
  }
}
