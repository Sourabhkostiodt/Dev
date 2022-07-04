import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-matrics',
  templateUrl: './matrics.component.html',
  styleUrls: ['./matrics.component.css']
})
export class MatricsComponent {

  public userArray: User[] = [];
  constructor(private http: HttpClient){
    this.http.get('assets/upload/csv.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.userArray.push(new User( parseInt( row[0], 10), row[1], row[2], row[3].trim()));
            }
            console.log(this.userArray);

        },
        error => {
            console.log(error);
        }
    );
  }
  index(index: any) {
    throw new Error('Method not implemented.');
  }


}
export class User{
  id: number;
  name: String;
  lastName: String;
  ticketdone:String;

  constructor(id: number, name: String, lastName: String,ticketdone: String){
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.ticketdone = ticketdone;
  }
}
