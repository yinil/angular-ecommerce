import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginRequestModel } from '../common/login-request-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  authenticated = false;
  token = "";
  userid = "";
  email = "";
  username = "";
  tokenKey = "ec-token-kas9";
  idKey = "ec-userId-kj2349";
  emailKey = "ec-email-k83hf";
  usernameKey = "ec-username-k8240s";
  baseUrl = "http://172.16.100.135:8011/user-ec/user/";

  constructor(private http: HttpClient) {
  }

  getUserDetails() {
    if (!localStorage.getItem(this.idKey)) {
      throw Error("User not authenticated");
    }
    var url = this.baseUrl + localStorage.getItem(this.idKey);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem(this.tokenKey)
      })
    };
    return this.http.get(url, httpOptions).pipe(map((data, error) => {
      if (!error) {
        return data;
      } else {
        console.log("user details", error);
        return error;
      }
    }));
  }

  signup(user) {
    var url_signup = this.baseUrl;
    return this.http.post(url_signup, user).pipe(map((data, error) => {
      if (!error) {
        console.log("user sign up", data);
        this.authenticated = true;
        return data;
      } else if (error) {
        console.log("user sign up", error);
        return error;
      }
    }));
  }

  logout() {
    localStorage.setItem(this.tokenKey, "");
    this.token = "";
    localStorage.setItem(this.idKey, "");
    this.userid = "";
    localStorage.setItem(this.emailKey, "");
    this.email = "";
    this.authenticated = false;
  }

  login(user: LoginRequestModel) {
    var url_login = this.baseUrl + "login";

    return this.http.post(url_login, user, {observe: 'response'}).pipe(map((data, error) => {
      if (!error) {
        this.token = data.headers.get("token");
        localStorage.setItem(this.tokenKey, this.token);
        this.userid = data.headers.get("userId");
        localStorage.setItem(this.idKey, this.userid);
        this.email = user.email;
        localStorage.setItem(this.emailKey, user.email);
        this.authenticated = true;
        return data;
      } else if (error) {
        return error;
      }
    }));
  }

}
