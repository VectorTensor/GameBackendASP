import { Component, OnInit } from '@angular/core';

import { Form,ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    repeatPassword:['',Validators.required]
  },{
    validators: this.passwordMatchValidator

  });

  constructor(private fb: FormBuilder){


  }

  ngOnInit() {

  }

  passwordMatchValidator(form: FormGroup){

    return form.get('password')?.value === form.get('password')?.value ? null:{'mismatch': true};

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
