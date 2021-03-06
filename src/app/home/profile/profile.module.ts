// *****************************************************************************************************

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfileComponent } from '@home/profile/profile.component';

// *****************************************************************************************************

@NgModule({
  declarations: [ProfileComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule, NgbModule],
  exports: [ProfileComponent],
  providers: [NgbActiveModal],
  entryComponents: [ProfileComponent]
})
export class ProfileModule {}

// *****************************************************************************************************
