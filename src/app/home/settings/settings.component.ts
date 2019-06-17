import { Component } from '@angular/core';

import { I18nService } from '@app/core';

import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  showOfflineUsers: boolean = true;

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  public setLanguage(language: string) {
    this.i18nService.language = language;
  }

  constructor(private i18nService: I18nService, public contactService: ContactService) {}
}
