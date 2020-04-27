import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectedDevicesRoutingModule } from 'app/detected-devices/detected-devices-routing.module';
import { DetectedDevicesComponent } from 'app/detected-devices/detected-devices.component';

@NgModule({
  imports: [CommonModule, DetectedDevicesRoutingModule],
  declarations: [DetectedDevicesComponent],
})
export class DetectedDevicesModule {}
