import { Injectable } from '@angular/core';
import { User } from 'src/app/features/model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationClientService {

  private url: string = 'http://localhost:3000/users';

  constructor( private httpClient: HttpClient) { }

  sendUser(user: User) {
    this.httpClient.post(this.url, user).subscribe();
  }
}
