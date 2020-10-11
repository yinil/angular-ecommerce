import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginRequestModel } from '../common/login-request-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  authenticated = false;
  userid: string;
  token: string;
  email: string;
  tokenKey = "ec-token-kas9";
  idKey = "ec-userId-kj2349";
  emailKey = "ec-email-k83hf";
  constructor(private http: HttpClient) {
    this.userid = localStorage.getItem(this.idKey);
    this.token = localStorage.getItem(this.tokenKey);
    this.emailKey = localStorage.getItem(this.emailKey);
  }
  // tested ok!
  // TODO: catch error (email already exists, etc.)
  signup(user) {
    var url_signup = 'http://172.16.100.135:8011/user-ec/user';
    return this.http.post(url_signup, user).pipe(map((data, error) => {
      if (!error) {
        console.log("user sign up", data);
        return data;
      } else if (error) {
        console.log("user sign up", error);
        return error;
      }
    }));
  }

  logout() {
    localStorage.setItem(this.tokenKey, "");
    localStorage.setItem(this.idKey, "");
    localStorage.setItem(this.emailKey, "");
    
    this.authenticated = false;
  }

  login(user: LoginRequestModel) {
    var url_login = "http://172.16.100.135:8011/user-ec/user/login";

    return this.http.post(url_login, user, {observe: 'response'}).pipe(map((data, error) => {
      if (!error) {
        this.email = user.email;
        this.authenticated = true;
        this.token = data.headers.get("token");
        localStorage.setItem(this.tokenKey, this.token);
        this.userid = data.headers.get("userId");
        localStorage.setItem(this.idKey, this.userid);
        return data;
      } else if (error) {
        this.authenticated = false;
        return error;
      }
    }));
  }
}
