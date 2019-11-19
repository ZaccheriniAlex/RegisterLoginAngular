import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginGroup = this.formBuilder.group(
      {
        username: ['', [Validators.required ] ],
        password: ['', [Validators.required ] ],
      }
    );
  }

  sendData() {
    this.submitted = true;
    console.log(`dati inviati: ${ this.username.value } ${ this.password.value }`);
  }


  get username() { return this.loginGroup.get('username') };
  get password() { return this.loginGroup.get('password') };
}
