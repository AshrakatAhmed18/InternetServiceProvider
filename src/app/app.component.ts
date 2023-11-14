import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ISP-Project';
constructor(private http:HttpClient){}
adminLogin:any;
  ngOnInit(): void {
    this.http.get("http://localhost:62426/user/Account/Login").subscribe({
      next :(Response:any) => { 
        console.log(Response)
        this.adminLogin = Response.data },
      error:error =>console.log(error),
      complete:()=> {
        console.log("Request Completed");
        
      }

    })
  }

  
}
