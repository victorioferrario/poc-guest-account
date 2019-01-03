import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PastCruisesComponent } from './components/past-cruises/past-cruises.component';

@NgModule({
  declarations: [PastCruisesComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'past-cruises', component: PastCruisesComponent },
      { path: '', redirectTo: 'past-cruises' }
    ])
  ]
})
export class GuestAccountModule {}
