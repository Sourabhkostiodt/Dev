import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup,Form, FormBuilder } from '@angular/forms';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false
  loading = false;
  submitted = false;

  constructor(public fb : FormBuilder,
    public Services :ServicesService ) { }

  ngOnInit(): void {
    this.registerformValue;
  }

  registerformValue = this.fb.group({
    name : '',
    email: '',
    password:''

  })
  get f() { return this.registerformValue.controls; }
  register( ){
      console.log(this.registerformValue.value)

       this.submitted = true;

        // stop here if form is invalid
        if (this.registerformValue.invalid) {
            return;
        }

         this.loading = true;
        this.Services.register(this.registerformValue.value)
            .pipe()
            .subscribe(
                data => {
                    this.Services.register('Registration successful');
                    // this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                });
  }

}
