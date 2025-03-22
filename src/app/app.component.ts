import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-01tutor';

  name:string = "Fabrone";
  data: number | string =30;

  userLogin: boolean = true;
  info:unknown = "salut la famille";


  accessInfo(){
    this.title = "Bonjour le monde";
    this.data = 50;

  }

  sumFunction(a:number, b:number){
    console.log(a+b);
  }



  handleClick(){
    alert("function click")
    this.otheClickEvent()
  };


  otheClickEvent(){
    console.log("this event worked")
  };
}
