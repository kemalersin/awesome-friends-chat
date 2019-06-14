import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/shared';
import { SideBarComponent } from './sidebar.component';
import { ContactModule } from '../contact/contact.module';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [FontAwesomeModule, ContactModule, SettingsModule, SharedModule],
  exports: [SideBarComponent],
  providers: []
})

export class SideBarModule {}
