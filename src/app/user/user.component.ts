import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 

import { IUser } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  regiForm: FormGroup;   
  Password:string='';  
  Email:string='';  
  IsAccepted:number=0;  
  hide = true;
  router= Router;
  returnUrl: string;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _service: UserService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.regiForm = this.formBuilder.group({  
      'Email':[null, Validators.compose([Validators.required,Validators.email])], 
      'Password':[null, Validators.compose([Validators.required,Validators.min(3)])],
      // 'IsAccepted':[null]  
    }); 

        // reset login status
        this._service.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onChange(event:any) {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  
  
  // Executed When Form Is Submitted  
  async onFormSubmit(form:IUser){
    try {
      this.loading = true;
      const data = await this._service.login(form);
      // this._router.navigate([this.returnUrl]);
      this._router.navigate(['/home']);
    } catch (e) {
      console.log('Exception: ', e);   
      this.loading = false;   
    }        
  } 

  async listenService(){    
    const data = await this._service.get();
    console.log('Data: ', data);    
  }

  goHone(){
    console.log('Go home');
    
    this._router.navigate([""]);
  }
}
