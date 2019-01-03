import { Component } from '@angular/core';
import { Logger } from '@rccl/logging';

@Component({
  selector: 'rccl-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.scss']
})
export class FolioComponent {

  constructor(private logger: Logger) {
    this.logger.log('Folio constructor');
  }
}
