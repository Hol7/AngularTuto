import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
