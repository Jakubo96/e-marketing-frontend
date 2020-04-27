import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectedDevicesComponent } from 'app/detected-devices/detected-devices.component';

const routes: Routes = [{ path: '', component: DetectedDevicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetectedDevicesRoutingModule {}
