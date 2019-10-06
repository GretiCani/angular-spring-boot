import { HardcodedAuthService } from './hardcoded-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class RouterGuardService implements CanActivate {

  constructor(private auth:HardcodedAuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.auth.isLoggedIn())
       return true;

       this.router.navigate(['login']);
    return false;
  }


}
