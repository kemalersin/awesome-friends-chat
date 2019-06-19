// *****************************************************************************************************

import { Component } from '@angular/core';
import { faCog, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// *****************************************************************************************************

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  // ...................................................................................................

  faCommentDots = faCommentAlt;
  faUser = faUser;
  faSettings = faCog;

  // ...................................................................................................

  constructor() {}

  // ...................................................................................................
}
