import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  name = new FormControl();
  email = new FormControl();
  password = new FormControl();

  profileForm = new FormGroup({
    name1: new FormControl(),
    email1: new FormControl(),
    password1: new FormControl(),
  });
  submitData(){
    console.log(this.profileForm.value);
  }

  getValue() {
    console.log(this.name.value);
  }
}
