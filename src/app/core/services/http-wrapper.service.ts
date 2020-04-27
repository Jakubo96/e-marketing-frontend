import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetectedDevices } from 'core/types/detected-devices';
import { Observable } from 'rxjs';
import { NotificationTime } from 'core/types/notification-time';

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  private readonly SERVER_PREFIX = 'api/';
  private readonly options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  public getDetectedDevices(): Observable<DetectedDevices> {
    return this.http.get<DetectedDevices>(
      `${this.SERVER_PREFIX}detected/all-devices`,
      this.options
    );
  }

  public changeNotificationTime(
    pushToken: string,
    notificationTime: NotificationTime
  ): Observable<void> {
    return this.http.put<void>(
      `${this.SERVER_PREFIX}notification/${pushToken}`,
      notificationTime,
      this.options
    );
  }
}
