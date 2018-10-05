import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher } from '@angular/material';

import { ServiceApi } from './services/service-api';
import { UserService } from './services/user-service';
import { AuthGuard } from './_guards';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { routing } from "./app.routing";

import { AccountComponent, ActionCodeComponent } from "./core";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    DefaultComponent,
    AccountComponent,
    ActionCodeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(routes)
    routing,
  ],
  exports: [RouterModule],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}, ServiceApi, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
