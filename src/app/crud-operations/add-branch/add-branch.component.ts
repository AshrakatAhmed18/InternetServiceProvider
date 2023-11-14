import { Component, OnInit } from '@angular/core';
import { BranchesService } from 'src/app/Service/branches.service';
import { branches } from 'src/app/models/branches';
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})

export class AddBranchComponent implements OnInit {
  addBranchMsg : string|undefined;
  constructor(private branch:BranchesService) {}
  ngOnInit(): void {
  }
  submit(data:branches){
    this.branch.Addbranch(data).subscribe((result)=>{
      console.warn(result);
      if(result) {
        this.addBranchMsg="Branch Is Added Successfuly";
      }
    })
  }

}
