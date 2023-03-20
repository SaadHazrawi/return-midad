import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInfo } from './login';

@Component({
  selector: 'midad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder){}
  sendFormData() {
   console.log(this.loginForm);
  }
  fileData()
  {
    this.loginForm.setValue({
      email:"saad@g.com",
      password:"123",
      remb:false
    })
  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      remb:true
    })
    // this.loginForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   remb: new FormControl()
    // });
  }
}
