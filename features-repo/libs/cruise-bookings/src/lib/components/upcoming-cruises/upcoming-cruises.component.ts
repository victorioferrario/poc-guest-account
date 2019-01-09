import { Component } from '@angular/core';
import { Logger } from '@rccl/logging';

@Component({
  selector: 'rccl-upcoming-cruises',
  templateUrl: './upcoming-cruises.component.html',
  styleUrls: ['./upcoming-cruises.component.scss']
})
export class UpcomingCruisesComponent {

  constructor(private logger: Logger) {
    this.logger.log('Upcoming cruises constructor');
  }
}
