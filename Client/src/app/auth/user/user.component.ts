import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../user.model";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})

export class UserComponent implements OnInit {

  user : User;
  constructor(private authService : AuthService) { }

  ngOnInit() {
//     console.log("user.OnInit");
     this.authService.getUser().then(u=>
     {
       console.log("user " + u);
         this.user = u
     });
  }

  onLogOut() {
    this.authService.logOut();
  }

}
