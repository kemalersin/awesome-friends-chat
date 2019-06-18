import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { has, includes, lowerCase } from 'lodash';

import { IContact } from './contact';
import { ContactService } from './contact.service';
import { ChatService } from '@home/chat/chat.service';
import { ProfileService } from '@home/profile/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() inConversation: boolean;

  contacts: IContact[];

  selectedContact: IContact;
  filteredContacts: IContact[];

  _filter: string;

  isLoading = false;
  showOfflineUsers: boolean = true;

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

  // Pass contact to chat service,
  // then start a conversation with selected contact:
  public startConversation(contact: IContact): void {
    this.selectedContact = contact;
    this.chatService.selectContact(contact);
  }

  // Filter contacts:
  private performFilter(filterBy: string): IContact[] {
    filterBy = lowerCase(filterBy);
    return this.contacts.filter((contact: IContact) => includes(lowerCase(contact.name), filterBy));
  }

  ngOnInit() {
    this.isLoading = true;

    // Get selected contact via service:
    this.chatService.getContact().subscribe(contact => (this.selectedContact = contact));

    // Getting all contacts from service for conversation and all contacts list:
    this.contactService
      .getContacts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((contacts: IContact[]) => {
        this.contacts = contacts;

        if (this.inConversation) {
          this.contacts = this.contacts.filter((contact: IContact) => has(contact, 'lastMessage'));
        }

        this.filteredContacts = this.contacts;
      });

    // Watch offline/online contacts display setting and set a flag:
    this.contactService.getOfflineMode().subscribe(showOfflineUsers => (this.showOfflineUsers = showOfflineUsers));
  }
}
