import { Component, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { HttpWrapperService } from 'core/services/http-wrapper.service';
import { ToastrService } from 'ngx-toastr';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { formatDate } from '@angular/common';

@AutoUnsubscribe()
@Component({
  selector: 'app-modal-time-picker',
  templateUrl: './modal-time-picker.component.html',
  styleUrls: ['./modal-time-picker.component.scss'],
})
export class ModalTimePickerComponent implements OnDestroy {
  @Input() public username: string;
  @Input() public pushToken: string;

  public timeControl = new FormControl({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private readonly httpWrapper: HttpWrapperService,
    private readonly toastr: ToastrService
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public ngOnDestroy(): void {}

  public changeNotificationTime(): void {
    const notificationTime = new Date();
    notificationTime.setHours(
      this.timeControl.value.hour,
      this.timeControl.value.minute,
      0
    );

    this.httpWrapper
      .changeNotificationTime(this.pushToken, {
        time: notificationTime,
      })
      .subscribe(() =>
        this.toastr.success(
          `Notification time for ${this.username} was changed to ${formatDate(
            notificationTime,
            'shortTime',
            'en-US'
          )}`
        )
      );
  }
}
