// *****************************************************************************************************

import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { has } from 'lodash';
import * as moment from 'moment';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { ChatService } from './chat.service';
import { ContactService } from '@home/contact/contact.service';
import { ProfileService } from '@home/profile/profile.service';

import { IContact } from '@home/contact/contact';
import { IMessage, MessageType } from './conversation';
import { IConversation } from './conversation';

// *****************************************************************************************************

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // ...................................................................................................

  contact: IContact;
  conversation: IConversation;

  isLoading = false;
  messageBody: string;

  faPaperClip = faPaperclip;

  // ...................................................................................................

  constructor(
    private chatService: ChatService,
    private contactService: ContactService,
    private profileService: ProfileService
  ) {}

  // ...................................................................................................

  ngOnInit() {
    this.contactService.contactSubject.subscribe(contact => {
      this.contact = contact;

      if (!has(contact, 'conversationId')) {
        this.conversation = null;
        return;
      }

      this.isLoading = true;

      this.chatService
        .getConversation(contact.conversationId)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(conversation => (this.conversation = conversation));
    });
  }

  // ...................................................................................................

  public showProfile() {
    this.profileService.showProfile(this.contact);
  }

  // ...................................................................................................

  public sendMessage() {
    const message: IMessage = {
      type: MessageType.Reply,
      time: moment().unix(),
      text: this.messageBody
    };

    this.messageBody = null;

    if (!this.conversation) {
      this.conversation = <IConversation>{
        messages: []
      };
    }

    this.conversation.messages.push(message);
  }

  // ...................................................................................................
}
