import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public journal = "";

}
