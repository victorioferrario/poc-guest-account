import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UpcomingCruisesComponent } from './components/upcoming-cruises/upcoming-cruises.component';

@NgModule({
  declarations: [UpcomingCruisesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UpcomingCruisesComponent }
    ])
  ]
})
export class CruiseBookingsModule {}
