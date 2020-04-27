import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpWrapperService } from 'core/services/http-wrapper.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';
import { DeviceIdentifier } from 'core/types/device-identifier';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTimePickerComponent } from 'app/detected-devices/modal-time-picker/modal-time-picker.component';
import { MessagingService } from 'core/services/messaging.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-detected-devices',
  templateUrl: './detected-devices.component.html',
  styleUrls: ['./detected-devices.component.scss'],
})
export class DetectedDevicesComponent implements OnInit, OnDestroy {
  public detectedDevices$: Observable<DeviceIdentifier[]>;

  constructor(
    private readonly httpWrapper: HttpWrapperService,
    private readonly modalService: NgbModal,
    private readonly messagingService: MessagingService,
  ) {}

  public ngOnInit(): void {
    this.loadDetectedDevices();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public ngOnDestroy(): void {}

  public onDeviceClicked(device: DeviceIdentifier): void {
    const modalRef = this.modalService.open(ModalTimePickerComponent);
    modalRef.componentInstance.username = device.username;
    modalRef.componentInstance.pushToken = device.pushToken;
  }

  private loadDetectedDevices(): void {
    this.detectedDevices$ = this.httpWrapper
      .getDetectedDevices()
      .pipe(map((devices) => devices.detectedDevices));
  }
}
