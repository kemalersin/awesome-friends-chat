import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { IContact } from '@home/contact/contact';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() contact: IContact;

  faFacebook = faFacebookSquare;
  faTwitter = faTwitterSquare;
  faInstagram = faInstagram;

  constructor(public activeModal: NgbActiveModal) {}
}
