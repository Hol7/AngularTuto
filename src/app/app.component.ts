import { Component, effect, signal,computed, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-01tutor';
  count = 0;
  username = '';
  display = false;
  namo = ""
  // users = ['dan', 'mse', 'toton', 'messieu', 'charle'];
  users = [];
  students = [
    { name: 'mulan', age: 20 },
    { name: 'acte', age: 21 },
    { name: 'ser', age: 20 },
    { name: 'polin', age: 40 },
  ];
  task = "";
  taskList : {id:number, name:string}[]=[];

  addTask(){
    this.taskList.push({id:this.taskList.length +1, name:this.task});
    this.task = "";
  }
  deleteTask(id:number){
    this.taskList = this.taskList.filter(item => item.id != id )
  }

  corout = signal(100);
  dataa:WritableSignal<number> = signal(10)
  dato:WritableSignal<number|string> = signal(10)
  x = signal(20);
  y= signal(30);

  z=computed(()=>this.x()+this.y())
  
  voteValu(){
    console.log(this.x())
    console.log(this.y())
    console.log(this.z())
    this.y.set(40);
    console.log(this.z)
  }


  constructor() {
    effect(() => {
      // console.log(this.corout());
      console.log(this.x())
      console.log(this.y())
      console.log(this.z())
    });
  };

  updateDataa(){
    this.dataa.update(value => value +1 );
    // this.dato.set(this.dato("jouer"))
  }

  updateDataaa(){
    // this.dataa.update(value => value +1 );
    this.dato.set("bonjoue")
  }

  updateValue(){
    this.corout.set(this.corout() +1)
  }

  show() {
    this.display = true;
  }
  hide() {
    this.display = false;
  }
  toggle() {
    this.display = !this.display;
  }

  handleInputEvent(event: Event) {
    let name = (event.target as HTMLInputElement).value;

    console.log('eve', name);
    // this.username = name;
  }

  addInpuInfo(AddInfoInput: string) {
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
