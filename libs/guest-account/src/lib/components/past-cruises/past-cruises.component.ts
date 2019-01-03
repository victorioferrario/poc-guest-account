import { Component } from '@angular/core';
import { Logger } from '@rccl/logging';

@Component({
  selector: 'rccl-past-cruises',
  templateUrl: './past-cruises.component.html',
  styleUrls: ['./past-cruises.component.scss']
})
export class PastCruisesComponent {

  constructor(private logger: Logger) {
    this.logger.log('Past cruises constructor');
  }
}
