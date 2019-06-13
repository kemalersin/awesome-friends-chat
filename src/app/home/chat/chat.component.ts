import { Component, OnInit } from '@angular/core';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { IContact } from '../contact/contact';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  contact: IContact;
  faPaperClip = faPaperclip;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getContact().subscribe(contact => (this.contact = contact));
  }
}
