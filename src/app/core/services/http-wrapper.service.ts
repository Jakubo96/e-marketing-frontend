import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetectedDevices } from 'core/types/detected-devices';
import { Observable } from 'rxjs';

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
      this.SERVER_PREFIX + 'detected/all-devices',
      this.options
    );
  }
}
