import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  router: any;
  constructor(private loginService: LoginService , router : Router) {}
  ngOnInit(): void {
  }
  userName: string | null = '';
  password: string | null = '';
  userNotFound: boolean = false;
  token = '';
  userNameIsEmpty: boolean = false;
  userPasswordIsEmpty :boolean = false;

  Login() {
    if (this.userName != '' && this.password != '') {
      let user = new User(this.userName, this.password);
      this.loginService.login(user).subscribe((res: any) => {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        this.token = res.token;
        document.cookie = `token=${this.token}`;
        if (this.token == '') this.userNotFound = true;
        else this.userNotFound = false;
      }),
        (err: any) => console.log('error');
    }
    else {
      this.userNameIsEmpty = true
      this.userPasswordIsEmpty = true
      this.router.navigate(['/dashboard']);
        }
  }
}
