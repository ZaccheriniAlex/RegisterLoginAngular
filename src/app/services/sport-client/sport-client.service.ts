import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportClientService {

  private url: string = 'http://localhost:3000/sports';

  constructor(private httpClient: HttpClient) { }

  getSports() {
    return this.httpClient.get(this.url);
  }
}
