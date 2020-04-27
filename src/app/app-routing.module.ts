import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'detected-devices',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    loadChildren: () =>
      import('app/detected-devices/detected-devices.module').then(
        (m) => m.DetectedDevicesModule
      ),
  },
  {
    path: '',
    redirectTo: '/detected-devices',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
