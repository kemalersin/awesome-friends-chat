import { Component } from '@angular/core';
import { faCog, faPaperclip, faCommentAlt, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faSettings = faCog;
  faPaperClip = faPaperclip;
  faCommentDots = faCommentAlt;
  faUser = faUser;
  faInfo = faInfoCircle;

  constructor() {}
}
