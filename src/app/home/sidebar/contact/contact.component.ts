import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { has, includes, lowerCase } from 'lodash';

import { IContact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @Input() contacts: IContact[];
  @Input() inConversation: boolean;

  filteredContacts: IContact[];

  _filter: string;  

  get filter() {
    return this._filter;
  }

  set filter(newValue: string) {
    this._filter = newValue;
    this.filteredContacts = this._filter ? this.performFilter(this._filter) : this.contacts;
  }   
 
  constructor() {}

  performFilter(filterBy: string): IContact[] {
    filterBy = lowerCase(filterBy);

    return this.contacts.filter(
        (contact: IContact) => includes(lowerCase(contact.name), filterBy)
    );
  }    

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.contacts) {
      return;
    }

    this.filteredContacts = !this.inConversation ? this.contacts :
      this.contacts.filter(
        (contact: IContact) => has(contact, 'lastMessage')
      );
  }  
}
