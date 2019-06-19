import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { has } from 'lodash';

import { IContact } from './contact';

const routes = {
  contacts: () => '/contacts'
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contact: IContact;
  public contactSubject = new Subject<IContact>();

  constructor(private httpClient: HttpClient) {}

  get selectedContact() {
    return this.contact;
  }

  set selectedContact(contact: IContact) {
    this.contact = contact;
    this.contactSubject.next(contact);
  }

  public getContacts(onlyInConservation?: boolean): Observable<IContact[]> {
    return this.httpClient
      .cache()
      .get(routes.contacts())
      .pipe(
        map((contacts: any) =>
          onlyInConservation ? contacts.filter((contact: IContact) => has(contact, 'lastMessage')) : contacts
        ),
        catchError(() => of('Could not load contacts.'))
      );
  }
}
