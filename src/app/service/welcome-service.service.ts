import { HttpClient } from '@Angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  constructor(private http: HttpClient) { }

  getWelcome(){
  return this.http.get("http://localhost:8080/welcome/gretiCani");
  }

}
