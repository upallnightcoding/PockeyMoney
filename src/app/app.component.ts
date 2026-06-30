import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { HomePageComponent } from './screen/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    //RouterOutlet, 
    MatSlideToggleModule, 
    MatButtonModule,
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PocketMoney';
}
