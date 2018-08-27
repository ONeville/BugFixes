import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './_guards';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DefaultComponent } from "./default";
import { AccountComponent, ActionCodeComponent } from "./core";

export const routes: Routes = [
  { path: '', component: UserComponent },
  { path: '', component: DefaultComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'account', component: AccountComponent },
      { path: 'actionCode', component: ActionCodeComponent }
    ] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);