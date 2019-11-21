import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/features/model/User';

const url = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  private url: string = 'http://localhost:3000/users';

  constructor( private httpClient: HttpClient ) { }

  public getUsers() {
    return this.httpClient.get<User[]>(url);
  }

  public sendUser(user: User) {
    this.httpClient.post(this.url, user).subscribe();
  }

}
