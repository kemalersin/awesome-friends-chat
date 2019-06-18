import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import * as moment from 'moment';

import { ChatService } from './chat.service';
import { ProfileService } from '@home/profile/profile.service';

import { IContact } from '@home/contact/contact';
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

  constructor(private chatService: ChatService, private profileService: ProfileService) {}

  /**
   * Push a reply message to active conversation.
   * Creates a new one if conversation is not available.
   */
  public sendMessage() {
    const message: IMessage = {
      type: 2,
      time: moment().unix(),
      text: this.messageBody
    };

    this.messageBody = null;

    if (!this.conversation) {
      this.conversation = { messages: [message] };
      return;
    }

    this.conversation.messages.push(message);
  }

  ngOnInit() {
    // Get selected contact via service:
    this.chatService.getContact().subscribe(contact => {
      this.contact = contact;

      if (!contact.conversationId) {
        this.conversation = null;
        return;
      }

      this.isLoading = true;

      // Get conversation with selected contact if "conversationId" exists:
      this.chatService
        .getConversation(contact.conversationId)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(conversation => (this.conversation = conversation));
    });
  }
}
