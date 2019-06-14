import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import * as moment from 'moment';

import { IContact } from '../contact/contact';
import { ChatService } from './chat.service';

import { IMessage } from './conversation';
import { IConversation } from './conversation';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  contact: IContact;
  conversation: IConversation;

  isLoading = false;
  messageBody: string;

  faPaperClip = faPaperclip;

  constructor(private chatService: ChatService) {}

  public sendMessage() {
    const message: IMessage = {
      type: 2,
      time: moment().unix(),
      text: this.messageBody
    };

    this.messageBody = null;

    if (!this.conversation) {
      this.conversation = {
        messages: [message]
      };

      return;
    }

    this.conversation.messages.push(message);
  }

  ngOnInit() {   
    this.chatService.getContact() 
      .subscribe((contact) => {
        this.contact = contact;

        if (!contact.conversationId) {
          this.conversation = null;
          return;
        }

        this.isLoading = true;

        this.chatService.getConversation(contact.conversationId)
          .pipe(finalize(() => (this.isLoading = false)))  
          .subscribe(conversation => (this.conversation = conversation));
      });
  }
}
