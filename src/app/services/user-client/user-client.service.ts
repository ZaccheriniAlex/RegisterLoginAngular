import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/features/model/user';
import { map } from 'rxjs/operators';

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

  public requestToken(id: number) {
    return this.httpClient.get<User>(`${ url }/${ id }`).pipe(map(result => {
      console.log(`${result.user}:${result.password}`);
      return `${result.user}:${result.password}`;
    }));
  }

}
