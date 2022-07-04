import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup,Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // registerformValue = new FormGroup;
  alert:boolean = false
//  public register = new FormGroup({
//     name: new FormGroup([]),
//     email: new FormGroup([]),
//     password: new FormGroup([])
//   })

  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {
    this.registerformValue;
  }

  registerformValue = this.fb.group({
    name : '',
    email: '',
    password:''

  })

  register( ){
     // console.log(this.registerformValue.value)
  }

}
