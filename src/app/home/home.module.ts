// *****************************************************************************************************

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { SideBarModule } from './sidebar/sidebar.module';
import { ChatModule } from './chat/chat.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// *****************************************************************************************************

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    SideBarModule,
    ChatModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}

// *****************************************************************************************************
