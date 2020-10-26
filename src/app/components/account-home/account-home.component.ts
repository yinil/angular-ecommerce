import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  constructor(private userService : UserService) { }
  email = "";
  username = "";

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(
      data => {
        this.email = data["email"];
        this.username = data["username"];
      }
    )
  }

}
