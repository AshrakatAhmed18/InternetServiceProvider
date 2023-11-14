import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule , 
    AppRoutingModule , 
    FormsModule , 
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent ,
    NavbarComponent
  ]  
})
export class StartUpPagesModule { }
