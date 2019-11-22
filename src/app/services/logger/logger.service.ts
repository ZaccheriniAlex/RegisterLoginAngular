import { Injectable } from '@angular/core';
import { CurrentUserService } from '../current-user/current-user.service';
import { tap, catchError } from 'rxjs/operators';
import { LoginNavigationService } from '../login-navigation/login-navigation.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    private currentUser: CurrentUserService,
    private loginRouter: LoginNavigationService,
  ) { }

  public login() {
    this.currentUser.isRegistered().pipe(tap(isRegistered => {
      if(isRegistered) {
        this.currentUser.setLoginStatus(true);
        this._requestToken();
        this.loginRouter.navigate();
        return;
      }
      this.logout();
    }
    ),
    catchError(err => of(window.alert('Errore nell\'inserimento delle credenziali')))).subscribe();
  }

  public logout() {
    this.currentUser.setLoginStatus(false);
    this.loginRouter.navigate();
  }

  private _requestToken() {
    this.currentUser.requestToken();
  }
}
