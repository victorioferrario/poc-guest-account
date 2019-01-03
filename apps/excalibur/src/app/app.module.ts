import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LoggingModule } from '@rccl/logging';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    LoggingModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
