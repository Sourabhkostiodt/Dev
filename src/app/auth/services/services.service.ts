import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
rootUrl = "http://localhost:4001/";

  constructor(private http:HttpClient) { }

  register(data: any){

    return this.http.post(this.rootUrl+"register",data)

  }

}
