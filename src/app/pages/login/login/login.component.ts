import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserClientService } from 'src/app/services/user-client/user-client.service'
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
    private loginClient: UserClientService,
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

  // tap si usa quando non ritorni niente
  // al posto di window alert si può usare una throw per lanciare un errore
  // e catchError per gestire tutti i throw che possonon essere lanciati

  // guarda Interceptor!
  // evoluzione con token e interceptor

  /*
    altro servizio intermedio per
    richiamo la funzione che fa la get di tutti gli utenti,
    poi faccio la pipe e map operator input array, output sarà T/F
    (possibile fare una catena di modifiche tramite diversi operators)
    chi usa questa funzione dall'esterno legge T/F
    subscribe ritorna una subscription
    PROVA: una volta che inserisce user e pass, se è present allora fa la login
    dove richiedo

    provare a fare una gestione del form anche di un numero con un validatore numerico custom
    checkbox + radio button

    modifica dati da parte dell'amministratore


  */

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
