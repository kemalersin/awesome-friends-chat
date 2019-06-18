import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { faCog, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import { IContact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  contacts: IContact[];

  faCommentDots = faCommentAlt;
  faUser = faUser;
  faSettings = faCog;

  isLoading = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.isLoading = true;

    // Getting all contacts from service for conversation and all contacts list
    this.contactService
      .getContacts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((contacts: IContact[]) => {
        this.contacts = contacts;
      });
  }
}
