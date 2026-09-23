import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { PmButtonComponent } from '../pm-button/pm-button.component';

export interface PMCmdListIf {
  command:string
}

@Component({
  selector: 'app-pm-cmd-list',
  imports: [CommonModule, MatSelectModule, PmButtonComponent],
  templateUrl: './pm-cmd-list.component.html',
  styleUrl: './pm-cmd-list.component.css'
})
export class PmCmdListComponent {

  public executeAction() : void {
    
  }

}
