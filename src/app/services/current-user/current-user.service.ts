import { Injectable } from '@angular/core';
import { BaseUser } from 'src/app/features/model/base-user';
import { UserClientService } from '../user-client/user-client.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/features/model/User';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser: BaseUser;

  constructor(private userClient: UserClientService) { }

  setCurrentUser(user: BaseUser) {
    this.currentUser = user;
  }

  getCurrentUser(): BaseUser {
    return this.currentUser;
  }

  isLogged(): boolean {
    return this.currentUser.logged;
  }

  setLoginStatus(isLogged: boolean) {
    this.currentUser.logged = isLogged;
  }

  isRegistered() {
    return this.userClient.getUsers().pipe(map(result => {
      for (let user of result) {
        if (this._isSameUser(user)) {
          return true;
        }
      }
      return false;
    }));
  }

  private _isSameUser(user: User): boolean {
    return (user.user == this.currentUser.username) && (user.password == this.currentUser.password);
  }
}
