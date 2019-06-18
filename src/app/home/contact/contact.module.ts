import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SharedModule } from '@app/shared';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [BrowserModule, FormsModule, TranslateModule, MomentModule, ScrollToModule.forRoot(), SharedModule],
  exports: [ContactComponent],
  providers: []
})
export class ContactModule {}
