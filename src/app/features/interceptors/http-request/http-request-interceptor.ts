import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor( private currentUser: CurrentUserService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.currentUser.getCurrentUser().getToken();
    if(!!token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`,
        }
      })
      console.log('è stato aggiunto il token di autorizzazione');
    }
    return next.handle(req).pipe(map(response => {
      if (response instanceof HttpResponse) {
        // QUI MODIFICO LA RISPOSTA DEL SERVER
      }
      return response;
    }));
  }
}
