import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name: string | number  = ""
  constructor(private route:ActivatedRoute){
 
  }

  ngOnInit(){
    this.route.params.subscribe(params=> {
      // console.log(params)
      this.name = params['name'] +" " + params['id']
    })
  }
}
