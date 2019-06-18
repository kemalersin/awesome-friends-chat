import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IContact } from '@home/contact/contact';
import { IConversation } from './conversation';

/**
 * API GET route for conversation.
 * @param id Id of conversation.
 * @return The route string.
 */
const routes = {
  conversation: (id: number) => `/conversations/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  @Output() contactEmitter: EventEmitter<IContact> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  // Emit passing contact:
  public selectContact(contact: IContact) {
    this.contactEmitter.emit(contact);
  }

  public getContact(): Observable<IContact> {
    return this.contactEmitter;
  }

  // Load conversation data from API:
  public getConversation(id: number): Observable<IConversation> {
    return this.httpClient
      .cache()
      .get(routes.conversation(id))
      .pipe(
        map((conversation: any) => conversation),
        catchError(() => of('Could not load conversation.'))
      );
  }
}
