import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { routing } from './authentication.routing';

@NgModule({
  imports: [
    CommonModule,
    routing 
  ],
  declarations: [UserComponent],
  // exports: [UserComponent]
})
export class AuthenticationModule { }
