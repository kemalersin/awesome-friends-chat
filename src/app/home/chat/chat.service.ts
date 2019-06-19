// *****************************************************************************************************

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IConversation } from './conversation';

// *****************************************************************************************************

const routes = {
  conversation: (id: number) => `/conversations/${id}`
};

// *****************************************************************************************************

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // ...................................................................................................

  constructor(private httpClient: HttpClient) {}

  // ...................................................................................................

  public getConversation(id: number): Observable<IConversation> {
    return this.httpClient
      .cache()
      .get(routes.conversation(id))
      .pipe(
        map((conversation: any) => conversation),
        catchError(() => of('Could not load conversation.'))
      );
  }

  // ...................................................................................................
}
