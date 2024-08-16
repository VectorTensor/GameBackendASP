import { Component, OnInit } from '@angular/core';

import { Form,ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup = this.fb.group({
    email:'',
    password: '',
    repeatPassword: ''
  })

  constructor(private fb: FormBuilder){


  }

  ngOnInit() {

  }


  onSubmit() {

    if(this.registerForm.valid){

      console.log('Registration successful', this.registerForm.value);


    }
    else{

      console.error('Form is invalid');

    }



  }

}
