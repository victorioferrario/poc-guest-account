import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PastCruisesComponent } from './components/past-cruises/past-cruises.component';

import { FolioModule } from '@rccl/folio';

@NgModule({
  declarations: [PastCruisesComponent],
  imports: [
    CommonModule,
    FolioModule,
    RouterModule.forChild([
      { path: '', component: PastCruisesComponent }
    ])
  ]
})
export class GuestAccountModule {}
