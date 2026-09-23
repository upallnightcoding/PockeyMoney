import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { PmButtonComponent } from "../../components/pm-button/pm-button.component";
import { MatButtonModule } from '@angular/material/button';
import { PmCmdListComponent } from '../../components/pm-cmd-list/pm-cmd-list.component';

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    PmCmdListComponent,
    PmButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public journal = "";

  public journalBtn() : void {
    console.log("Button Callback Journal ...");
  }

  public budgetBtn() : void {
    console.log("Button Callback Budget ...");
  }

}
