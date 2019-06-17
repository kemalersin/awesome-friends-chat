import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/shared';
import { ChatComponent } from './chat.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [ChatComponent, ProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule,
    MomentModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  exports: [ChatComponent],
  providers: [NgbActiveModal],
  entryComponents: [ProfileComponent]
})
export class ChatModule {}
