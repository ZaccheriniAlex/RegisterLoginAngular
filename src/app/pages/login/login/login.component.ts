import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginClientService } from 'src/app/services/user-login-client/user-login-client.service'
import { Router } from '@angular/router';
import { User } from 'src/app/features/model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get username() { return this.loginGroup.get('username') };
  get password() { return this.loginGroup.get('password') };

  loginGroup: FormGroup;
  submitted: boolean = false;
  users = [];

  constructor(
    private formBuilder: FormBuilder,
    private loginClient: UserLoginClientService,
    private router: Router,
  ) { }

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
    this.loginClient.getUsers().subscribe(result => {
      //let isPresent: boolean = false;
      this.users = result;
      for (let user of this.users) {
        if (this._isAdmin()) {
          this.router.navigate(['/admin']);
          return;
        }
        if (this._isSameUser(user)) {
          this.router.navigate(['/user'], { queryParams: { name: user.name, surname: user.surname } });
          return;
        }
      }
      window.alert("Username o password non corretti");
    });

    // this.router.navigate(['']);
  }

  private _isSameUser(user: User) {
    return (user.user == this.username.value) && (user.password == this.password.value);
  }

  private _isAdmin() {
    return (this.username.value == 'admin') && (this.password.value == 'admin');
  }
}
