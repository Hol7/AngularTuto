import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {id:'1', name:'mark', age:20},
    {id:'2', name:'markinos', age:25},
    {id:'3', name:'maruis', age:50},
    {id:'4', name:'maloto', age:200},
    {id:'5', name:'markamus', age:440},
  ]

}
