import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = "http://localhost:4001/";

  constructor(private http:HttpClient) { }


  // login(username: string, password: string) {
  //   // post to fake back end, this url will be handled there...

  //   return this.http
  //     .post<any>(`/users/authenticate`, { username, password })
  //     .pipe(
  //       map(user => {
  //         // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
  //         user.authdata = window.btoa(username + ":" + password);
  //         localStorage.setItem("currentUser", JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

}
