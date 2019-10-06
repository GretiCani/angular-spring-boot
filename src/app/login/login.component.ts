import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username 
  password 
  invalidMessage = 'Bad Credincials'
  invalidLogin= false

  constructor(private router : Router,private authentication:HardcodedAuthService) { }

  authenticate(){

    if(this.authentication.authenticate(this.username,this.password)){
        this.invalidLogin=false;
        this.router.navigate(['welcome',this.username]);
      }
      else {this.invalidLogin=true;  }
      
  }

  ngOnInit() {
  }

}
