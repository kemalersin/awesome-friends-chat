// *****************************************************************************************************

import { Component } from '@angular/core';

import { I18nService } from '@app/core';
import { ContactService } from '@home/contact/contact.service';
import { SettingsService } from './settings.service';

// *****************************************************************************************************

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  // ...................................................................................................

  constructor(
    private i18nService: I18nService,
    public contactService: ContactService,
    public settingsService: SettingsService
  ) {}

  // ...................................................................................................

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  // ...................................................................................................

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  // ...................................................................................................

  get offlineMode(): boolean {
    return this.settingsService.offlineMode;
  }

  // ...................................................................................................

  set offlineMode(newMode: boolean) {
    this.settingsService.offlineMode = newMode;
  }

  // ...................................................................................................

  public setLanguage(language: string) {
    this.i18nService.language = language;
  }

  // ...................................................................................................
}
