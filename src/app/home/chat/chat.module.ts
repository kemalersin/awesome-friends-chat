// *****************************************************************************************************

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/shared';
import { ProfileModule } from '@home/profile/profile.module';

import { ChatComponent } from './chat.component';

// *****************************************************************************************************

@NgModule({
  declarations: [ChatComponent],
  imports: [BrowserModule, FormsModule, TranslateModule, FontAwesomeModule, MomentModule, SharedModule, ProfileModule],
  exports: [ChatComponent],
  providers: []
})
export class ChatModule {}

// *****************************************************************************************************
