import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { HttpWrapperService } from 'core/services/http-wrapper.service';

@Component({
  selector: 'app-modal-time-picker',
  templateUrl: './modal-time-picker.component.html',
  styleUrls: ['./modal-time-picker.component.scss'],
})
export class ModalTimePickerComponent {
  @Input() public username: string;
  @Input() public pushToken: string;

  public timeControl = new FormControl({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private readonly httpWrapper: HttpWrapperService
  ) {}

  public changeNotificationTime(): void {
    const notificationTime = new Date();
    notificationTime.setHours(
      this.timeControl.value.hour,
      this.timeControl.value.minute,
      0
    );

    this.httpWrapper.changeNotificationTime(this.pushToken, {
      time: notificationTime,
    });
  }
}
