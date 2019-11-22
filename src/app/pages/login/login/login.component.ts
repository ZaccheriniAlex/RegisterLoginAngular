import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';
import { BaseUser } from 'src/app/features/model/base-user';
import { LoggerService } from 'src/app/services/logger/logger.service';

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
    private logger: LoggerService,
    private currentUser: CurrentUserService,
  ) { }

  ngOnInit() {
    //this.currentUser.setLogged(false);
    this.loginGroup = this.formBuilder.group (
      {
        username: ['', [Validators.required ] ],
        password: ['', [Validators.required ] ],
      }
    );
  }

  // TODO: tap si usa quando non ritorni niente
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
    dove richiedo token

    provare a fare una gestione del form anche di un numero con un validatore numerico custom
    checkbox + radio button

    modifica dati da parte dell'amministratore


  */

  sendData() {
    this.submitted = true;
    let currentUser = new BaseUser(this.username.value, this.password.value, false);
    this.currentUser.setCurrentUser(currentUser);
    this.logger.login();
  }
}
