import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginRequestModel } from 'src/app/common/login-request-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  credentials = {password: '', email: ''};
  error: string;
  ngOnInit(): void {
    this.error = '';
  }

  login() {
    const user = new LoginRequestModel(this.credentials.email, this.credentials.password);
    this.userService.login(user).subscribe(
      data => {
        console.log('data', data);
        this.error = '';
      },
      error => {
        console.log('error', error);
        this.error = error;
      }
    );
  }

}
