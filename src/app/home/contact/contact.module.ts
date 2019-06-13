import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [BrowserModule, FormsModule, MomentModule],
  exports: [ContactComponent],
  providers: []
})
export class ContactModule {}
