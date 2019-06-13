import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { has, head, includes, lowerCase } from 'lodash';

import { IContact } from './contact';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contacts: IContact[];
  @Input() inConversation: boolean;

  selectedContact: IContact;
  filteredContacts: IContact[];

  _filter: string;

  get filter() {
    return this._filter;
  }

  set filter(newValue: string) {
    this._filter = newValue;
    this.filteredContacts = this._filter ? this.performFilter(this._filter) : this.contacts;
  }

  constructor(private chatService: ChatService) {}

  public startConversation(event: any, contact: IContact): void {
    this.selectedContact = contact;
    this.chatService.selectContact(contact);
  }

  private performFilter(filterBy: string): IContact[] {
    filterBy = lowerCase(filterBy);

    return this.contacts.filter((contact: IContact) => includes(lowerCase(contact.name), filterBy));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.contacts) {
      return;
    }

    if (this.inConversation) {
      this.contacts = this.contacts.filter((contact: IContact) => has(contact, 'lastMessage'));
    }

    this.filteredContacts = this.contacts;
  }
}
