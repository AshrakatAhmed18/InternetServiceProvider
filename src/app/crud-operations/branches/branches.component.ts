import { Component, OnInit } from '@angular/core';
import { BranchesService } from 'src/app/Service/branches.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit{

  branches : any [] = [];
  constructor (private branchService:BranchesService) {}
  ngOnInit(): void {
    this.getAllbranches();
  }
  getAllbranches() {
    this.branchService.getAllbranches().subscribe((result:any)=>{
      this.branches = result;
    })
  }
}
