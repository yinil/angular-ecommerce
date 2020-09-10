import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated = false;
  userid: string;
  token: string;
  constructor(private http: HttpClient) {
    // this.userid = '';
    this.userid = '0112';
    this.token = '';
  }
  // tested ok!
  // TODO: catch error (email already exists, etc.)
  signup(user) {
    var url_signup = 'http://localhost:8011/users/users';

    return this.http.post(url_signup, user).pipe(map((data, error) => {
      if (!error) {
        this.authenticated = true;
        this.userid = data['userid'];
        console.log(this.userid);
        return data;
      } else if (error) {
        this.authenticated = false;
        return error;
      }
    }));
  }

  login(user) {
    var url_login = "http://localhost:8011/users/users/login";

    return this.http.post(url_login, user, {observe: 'response'}).pipe(map((data, error) => {
      if (!error) {
        this.authenticated = true;
        this.token = data.headers.get("token");
        // console.log(data.headers.getAll("Authorization"));
        console.log(this.token);
        return data;
      } else if (error) {
        this.authenticated = false;
        return error;
      }
    }));
  }
}
