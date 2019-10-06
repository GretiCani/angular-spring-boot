import { WelcomeServiceService } from './../service/welcome-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username='';
  message:any;

  constructor(private activatedRouter : ActivatedRoute, private service:WelcomeServiceService) { }

  getApiMessage(){
    this.service.getWelcome().subscribe(respone=> console.log(respone),error => console.log(error.error.message)
    );
  }

  ngOnInit() {
    this.username = this.activatedRouter.snapshot.params['username'];
    console.log(this.username);

  }

}
