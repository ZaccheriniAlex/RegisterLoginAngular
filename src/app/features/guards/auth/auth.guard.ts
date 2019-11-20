import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._checkLogin();
  }

  private _checkLogin(): boolean {
    if (this.currentUserService.isLogged()) {
      if (this._isAdminLogged()) {
        return true;
      } else {
        window.alert('Non è stato usato un username valido, riprova a fare il login');
        this.router.navigate(['login']);
      }
      this.router.navigate(['']);
      return false;
    }
  }

  private _isAdminLogged() {
    return this.currentUserService.getCurrentUsername() == 'admin';
  }
}
