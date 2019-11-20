import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/features/model/User';
import { map, tap } from 'rxjs/operators';

const url = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class UserLoginClientService {

  constructor( private httpClient: HttpClient ) { }

  public getUsers() {
    return this.httpClient.get<User[]>(url);
  }

}
