import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'past-cruises', loadChildren: './guest-account/guest-account.module#LocalGuestAccountModule' },
      { path: 'upcoming-cruises', loadChildren: './cruise-bookings/cruise-bookings.module#LocalCruiseBookingsModule' }
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
