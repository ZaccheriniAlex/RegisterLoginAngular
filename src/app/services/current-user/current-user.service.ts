import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private logged: boolean = false;
  private currentUsername: string;

  constructor() { }

  setUsername(username: string) {
    this.currentUsername = username;
  }

  getCurrentUsername(): string {
    return this.currentUsername;
  }

  setLogged(logged: boolean) {
    this.logged = logged;
  }

  isLogged(): boolean {
    return this.logged;
  }
}
