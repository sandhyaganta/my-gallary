import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-dash',
  standalone: true,
  imports: [ RouterLink,RouterOutlet],
  templateUrl: './home-dash.component.html',
  styleUrl: './home-dash.component.css'
})
export class HomeDashComponent {

}
