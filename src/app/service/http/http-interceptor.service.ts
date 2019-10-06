import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = 'user'
    let password='greti'
    let basicAuth='Basic '+window.btoa(username+':'+password);

    req = req.clone({
      setHeaders:{
        Authorization: basicAuth
      }
    })

    return next.handle(req)
  }

  constructor() { }
}
