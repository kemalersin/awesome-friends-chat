import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private showOfflineUsers = true;
  public offlineModeSubject = new Subject<boolean>();

  constructor() {}

  get offlineMode(): boolean {
    return this.showOfflineUsers;
  }

  set offlineMode(showOfflineUsers: boolean) {
    this.showOfflineUsers = showOfflineUsers;
    this.offlineModeSubject.next(showOfflineUsers);
  }
}
