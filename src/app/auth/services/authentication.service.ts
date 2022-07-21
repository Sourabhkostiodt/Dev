import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = "http://localhost:4001/";

  constructor(private http:HttpClient) { }


login(data: any):Observable<any> {
  console.log('this is from server');
  console.log(data);
  return this.http.post('http://localhost:4001/login',data);
  console.log('login sussesfully');

}
}
