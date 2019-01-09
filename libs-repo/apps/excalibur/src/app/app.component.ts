import { Component } from '@angular/core';
import { Logger } from '@rccl/logging';

@Component({
  selector: 'rccl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excalibur';

  constructor(private logger: Logger) {
    this.logger.log('AppComponent constructor');
  }
}
