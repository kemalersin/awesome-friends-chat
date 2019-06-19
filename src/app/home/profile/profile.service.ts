// *****************************************************************************************************

import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile.component';

import { IContact } from '@home/contact/contact';

// *****************************************************************************************************

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // ...................................................................................................

  constructor(private modalService: NgbModal) {}

  // ...................................................................................................

  public showProfile(contact: IContact): void {
    const modalRef = this.modalService.open(ProfileComponent, {
      windowClass: 'animated jackInTheBox fast',
      centered: true
    });
    modalRef.componentInstance.contact = contact;
  }

  // ...................................................................................................
}
