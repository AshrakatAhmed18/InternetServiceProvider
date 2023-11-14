import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesComponent } from './branches/branches.component';
import { AddBranchComponent } from './add-branch/add-branch.component';



@NgModule({
  declarations: [
    BranchesComponent,
    AddBranchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BranchesComponent,
    AddBranchComponent
  ]
})
export class CRUDOperationsModule { }
