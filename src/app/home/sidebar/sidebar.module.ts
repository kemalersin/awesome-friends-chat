// *****************************************************************************************************

import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SideBarComponent } from './sidebar.component';

import { ContactModule } from '@home/contact/contact.module';
import { SettingsModule } from '@home/settings/settings.module';

// *****************************************************************************************************

@NgModule({
  declarations: [SideBarComponent],
  imports: [FontAwesomeModule, ContactModule, SettingsModule],
  exports: [SideBarComponent],
  providers: []
})
export class SideBarModule {}

// *****************************************************************************************************
