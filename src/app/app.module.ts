import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StartUpPagesModule } from './start-up-pages/start-up-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CRUDOperationsModule } from './crud-operations/crud-operations.module';

 @NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    
  ],
  imports: [
    BrowserModule,
    StartUpPagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule ,
    RouterModule ,
    CRUDOperationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
