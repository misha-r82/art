import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[AuthService]
})
export class UserComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.logOut();
  }

}
