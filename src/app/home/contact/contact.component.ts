import { Component, OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { includes, lowerCase } from 'lodash';

import { IContact } from './contact';

import { ContactService } from './contact.service';
import { ProfileService } from '@home/profile/profile.service';
import { SettingsService } from '@home/settings/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() inConversation: boolean;

  contacts: IContact[];
  filteredContacts: IContact[];

  _filter: string;

  isLoading = false;
  showOfflineUsers = true;

  get filter() {
    return this._filter;
  }

  set filter(newValue: string) {
    this._filter = newValue;
    this.filteredContacts = this._filter ? this.performFilter(this._filter) : this.contacts;
  }

  get selectedContact(): IContact {
    return this.contactService.selectedContact;
  }

  constructor(
    private contactService: ContactService,
    private profileService: ProfileService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.settingsService.offlineModeSubject.subscribe(showOfflineUsers => (this.showOfflineUsers = showOfflineUsers));

    this.contactService
      .getContacts(this.inConversation)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((contacts: IContact[]) => {
        this.contacts = contacts;
        this.filteredContacts = this.contacts;
      });
  }

  private performFilter(filterBy: string): IContact[] {
    filterBy = lowerCase(filterBy);
    return this.contacts.filter((contact: IContact) => includes(lowerCase(contact.name), filterBy));
  }

  public selectContact(contact: IContact) {
    this.contactService.selectedContact = contact;
  }

  public showProfile(contact: IContact) {
    this.profileService.showProfile(contact);
  }
}
