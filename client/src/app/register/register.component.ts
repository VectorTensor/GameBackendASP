import { Component, OnInit } from '@angular/core';

import { Form,ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgIf} from "@angular/common";
import {routeAnimation} from "../Animations/BasicAnimations";
import {IScoreApiService, ScoreApiServiceService} from "../score-api-service.service";
import {ScoresComponent} from "../scores/scores.component";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  animations: [routeAnimation],
  providers:[{provide: IScoreApiService,useClass:ScoreApiServiceService}],
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

  constructor(private fb: FormBuilder, private ApiService:IScoreApiService){


  }

  ngOnInit() {

  }

  passwordMatchValidator(form: FormGroup){

    return form.get('password')?.value === form.get('password')?.value ? null:{'mismatch': true};

  }


  async onSubmit() {

    if(this.registerForm.valid){

      console.log('Registration successful', this.registerForm.value);

      this.ApiService.Register({
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      }).subscribe(
        (response:any) => {

          console.log("success "+response);

        }
        ,
        (error:any)=>{
          console.log("error " + error);

        }
      );




    }
    else{

      console.error('Form is invalid');

    }



  }

}
