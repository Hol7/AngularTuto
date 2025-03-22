import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-01tutor';
  count = 0;
  username = '';

  handleInputEvent(event: Event) {
    let name = (event.target as HTMLInputElement).value;

    console.log('eve', name);
    // this.username = name;
  }

  addInpuInfo(AddInfoInput:string){
    this.username = AddInfoInput;

  }

  handleCounterLogic(value: string) {
    if (value === 'minus') {
      if (this.count === 0) {
        this.count;
      } else {
        this.count = this.count - 1;
      }
    } else if (value === 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  handleIncrement() {
    this.count = this.count + 1;
  }
  handeleDecrement() {
    if (this.count === 0) {
      return this.count;
    }
    return (this.count = this.count - 1);
  }

  handleReset() {
    this.count = 0;
  }

  name: string = 'Fabrone';
  data: number | string = 30;

  userLogin: boolean = true;
  info: unknown = 'salut la famille';

  accessInfo() {
    this.title = 'Bonjour le monde';
    this.data = 50;
  }

  sumFunction(a: number, b: number) {
    console.log(a + b);
  }

  handleClick() {
    alert('function click');
    this.otheClickEvent();
  }

  otheClickEvent() {
    console.log('this event worked');
  }
}
