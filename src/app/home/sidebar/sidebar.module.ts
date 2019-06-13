import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/shared';
import { SideBarComponent } from './sidebar.component';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule, ContactModule, SharedModule],
  exports: [SideBarComponent],
  providers: []
})
export class SideBarModule {}
