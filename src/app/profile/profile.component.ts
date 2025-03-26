import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  name = new FormControl();
  email = new FormControl();
  password = new FormControl();

  profileForm = new FormGroup({
    name1: new FormControl('',[Validators.required]),
    email1: new FormControl('',[Validators.required, Validators.maxLength(30) ]),
    password1: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  
  submitData(){
    console.log(this.profileForm.value);
  }

  getValue() {
    console.log(this.name.value);
  }
}
