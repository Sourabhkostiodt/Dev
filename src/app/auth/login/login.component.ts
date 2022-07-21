import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormValue!: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginFormValue = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])

    });
  }



  Onsubmit() {
    if (this.loginFormValue.valid) {
      console.log('here');
      this.authenticationService.login(this.loginFormValue.value).subscribe(result => {
        if (result.success) {
          console.log(result);
          console.log('ho gaya ');
          alert(result.message);
        }
        else {
          alert(result.message);
        }
      })
    }

  }


}
