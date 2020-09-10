import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  credentials = {firstname: '', lastname: 'test', password: '', email: ''};
  error: string;
  ngOnInit(): void {
    this.error = '';
    this.credentials = {firstname: '', lastname: 'test', password: '', email: ''};
  }

  signup() {
    const user = new User(this.credentials.firstname, this.credentials.lastname, this.credentials.email, this.credentials.password);
    this.userService.signup(user).subscribe(
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
