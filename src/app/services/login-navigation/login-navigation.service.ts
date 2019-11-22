import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginNavigationService {

  constructor(
    private router: Router,
    private currentUser: CurrentUserService
  ) { }

  public navigate() {
    console.log(`Status login current user: ${ this.currentUser.isLogged() }`);
    if (this.currentUser.isLogged()) {
      if(this._isAdmin()) {
        this.router.navigate(['admin']);
        return;
      }
      this.router.navigate(['/user'], { queryParams: { username: this.currentUser.getCurrentUser().username } });
      return;
    }
    throw new Error('Credenziali non corrette');
  }

  private _isAdmin():boolean {
    return this.currentUser.getCurrentUser().username == 'admin';
  }
}
