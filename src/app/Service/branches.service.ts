import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { branches } from '../models/branches';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http : HttpClient) { }

  getAllbranches (){
    return this.http.get('http://localhost:62426/api/branch');
  }
  Addbranch (data : branches) {
   return this.http.post('http://localhost:62426/api/branch', data);
  }
}
