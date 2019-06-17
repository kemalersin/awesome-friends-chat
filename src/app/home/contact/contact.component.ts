import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { has, includes, lowerCase } from 'lodash';

import { IContact } from './contact';
import { ContactService } from './contact.service';
import { ChatService } from '../chat/chat.service';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contacts: IContact[];
  @Input() inConversation: boolean;

  showOfflineUsers: boolean = true;

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

  constructor(
    private contactService: ContactService,
    private chatService: ChatService,
    private profileService: ProfileService
  ) {}

  public startConversation(contact: IContact): void {
    this.selectedContact = contact;
    this.chatService.selectContact(contact);
  }

  private performFilter(filterBy: string): IContact[] {
    filterBy = lowerCase(filterBy);

    return this.contacts.filter((contact: IContact) => includes(lowerCase(contact.name), filterBy));
  }

  ngOnInit() {
    this.contactService.getOfflineMode().subscribe(showOfflineUsers => (this.showOfflineUsers = showOfflineUsers));
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
