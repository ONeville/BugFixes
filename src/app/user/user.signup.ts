import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../services';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user.signup.html',
  styleUrls: ['./user.component.css']
})
export class UserSignupComponent implements OnInit {
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Password:string='';  
  Address:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  IsAccepted:number=0;  
  hide = true;

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
  });

    this.regiForm = this.formBuilder.group({  
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      'DOB' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Blog':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'Password':[null, Validators.compose([Validators.required,Validators.min(3)])],
      'IsAccepted':[null]  
    }); 
  }
  onChange(event:any) {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:any){  
    if (this.registerForm.invalid) return;
  } 
}
