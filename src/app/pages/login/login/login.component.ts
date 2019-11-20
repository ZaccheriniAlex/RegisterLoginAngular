import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginClientService } from 'src/app/services/user-client/user-client.service'
import { Router } from '@angular/router';
import { User } from 'src/app/features/model/User';
import { tap } from 'rxjs/operators';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';
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
    private currentUser: CurrentUserService,
  ) { }

  ngOnInit() {
    this.currentUser.setLogged(false);
    this.loginGroup = this.formBuilder.group (
      {
        username: ['', [Validators.required ] ],
        password: ['', [Validators.required ] ],
      }
    );
  }

  sendData() {
    this.submitted = true;
    this.loginClient.getUsers().pipe(tap(result => {
      if (this._isAdmin()) {
        this.currentUser.setLogged(true);
        this.currentUser.setUsername(this.username.value);
        this.router.navigate(['/admin']);
        return;
      }
      for (let user of result) {
        if (this._isSameUser(user)) {
          this.currentUser.setLogged(true);
          this.currentUser.setUsername(user.user);
          this.router.navigate(['/user'], { queryParams: { name: user.name, surname: user.surname } });
          return;
        }
      }
      window.alert("Username o password non corretti");
    })).subscribe();
  }

  private _isSameUser(user: User) {
    return (user.user == this.username.value) && (user.password == this.password.value);
  }

  private _isAdmin() {
    return (this.username.value == 'admin') && (this.password.value == 'admin');
  }
}
