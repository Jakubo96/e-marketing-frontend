import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private readonly afMessaging: AngularFireMessaging) {
    this.requestPermissions();
    this.listenToNotifications();
  }

  private requestPermissions(): void {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private listenToNotifications(): void {
    this.afMessaging.messages.subscribe(
      (message) => {
        console.log('Wiadomość odebrana');
        console.log(message);
      },
      (error) => console.log(`Sth went wrong: ${error}`)
    );
  }
}
