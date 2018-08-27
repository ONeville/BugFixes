import { UserComponent } from '../user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: UserComponent }, // default route of the module
  { path: 'login', component: UserComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'help', component: HelpComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);