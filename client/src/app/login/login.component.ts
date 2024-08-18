import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {routeAnimation} from "../Animations/BasicAnimations";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  animations:[routeAnimation],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{

    loginForm: FormGroup = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {

  }

  onSubmit():void{
    if(this.loginForm.valid){

      console.log('Registration successful', this.loginForm.value);

    }
    else{

      console.error('Form is invalid');

    }

  }


}
