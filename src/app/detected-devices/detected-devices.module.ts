import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectedDevicesRoutingModule } from 'app/detected-devices/detected-devices-routing.module';
import { DetectedDevicesComponent } from 'app/detected-devices/detected-devices.component';
import { ModalTimePickerComponent } from 'app/detected-devices/modal-time-picker/modal-time-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DetectedDevicesRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [DetectedDevicesComponent, ModalTimePickerComponent],
  entryComponents: [ModalTimePickerComponent],
})
export class DetectedDevicesModule {}
