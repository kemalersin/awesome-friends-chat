import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IContact } from './contact';

/**
 * API GET route for all contacts.
 * @return The route string.
 */
const routes = {
  contacts: () => '/contacts'
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  @Output() contactEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  // Emit passing offline/online contacts displaying mode setting:
  public changeOfflineMode(showOfflineUsers: boolean) {
    this.contactEmitter.emit(showOfflineUsers);
  }

  public getOfflineMode(): Observable<boolean> {
    return this.contactEmitter;
  }

  // Load contacts data from API:
  public getContacts(): Observable<IContact[]> {
    return this.httpClient
      .cache()
      .get(routes.contacts())
      .pipe(
        map((contacts: any) => contacts),
        catchError(() => of('Could not load contacts.'))
      );
  }
}
