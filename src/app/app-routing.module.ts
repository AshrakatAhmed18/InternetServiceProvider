import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './start-up-pages/home/home.component';
import { LoginComponent } from './start-up-pages/login/login.component';
import { ContactComponent } from './start-up-pages/contact/contact.component';
import { AboutComponent } from './start-up-pages/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchesComponent } from './crud-operations/branches/branches.component';
import { AddBranchComponent } from './crud-operations/add-branch/add-branch.component';


const routes : Routes = [
  {path : '' , component : HomeComponent} ,
  {path : 'login' , component : LoginComponent} ,
  {path : 'contact' , component : ContactComponent} , 
  {path : 'about' , component : AboutComponent} ,
  {path : 'dashboard' , component : DashboardComponent } ,
  {path : 'branches' , component : BranchesComponent},
  {path : 'add/branch' ,component : AddBranchComponent}

] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    RouterModule
  ],
  exports: [
    RouterModule , 
  ],

  declarations: []
})
export class AppRoutingModule { }