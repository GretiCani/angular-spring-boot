import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean = false

  constructor(private auth:HardcodedAuthService) { }

  isLogged(){
    return this.auth.isLoggedIn();
  }

  logout(){
    return this.auth.logout();
  }

  ngOnInit() {
    this.isUserLoggedIn=this.auth.isLoggedIn();
  }

}
