import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FolioComponent } from './components/folio/folio.component';

@NgModule({
  declarations: [FolioComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: 'folios', component: FolioComponent}
    ])
  ]
})
export class FolioModule {}
