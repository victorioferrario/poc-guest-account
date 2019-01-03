import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {

  log(text: string): void {
    console.log(text);
  }
}
