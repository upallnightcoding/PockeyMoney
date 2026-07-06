import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pm-button',
  imports: [MatButtonModule],
  templateUrl: './pm-button.component.html',
  styleUrl: './pm-button.component.css'
})
export class PmButtonComponent {
  @Input() title = "Default Title";
  @Input() execute!:(() => void);

  constructor() {
    console.log("Constructor ...");
  }

  public doSomething(callback : () => void) {
    if (callback) {
      callback();
    }
  }
}
