import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username==="GretiCani" && password==="Greti1234")
      {
        sessionStorage.setItem('authenticatedUser',username);
        return true;
      }
        console.log(username);
        return false;  
  }

 isLoggedIn(){
   let user = sessionStorage.getItem('authenticatedUser');
   return !(user===null)
 }

 logout(){
  sessionStorage.removeItem('authenticatedUser');}

}
