import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = "http://localhost:62426/user/Account/Login"

  constructor(private httpClinet:HttpClient) { }

  login(user:User):Observable<any>{
     return this.httpClinet.post(this.url , user)
  }
}
