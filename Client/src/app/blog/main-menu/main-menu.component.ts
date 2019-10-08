import { Component, OnInit } from '@angular/core';
import {UserComponent} from "../../auth/user/user.component";
import {ADminGuard} from "../../admin.guard";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],

})
export class MainMenuComponent implements OnInit {
  private isAdmin = false;

  constructor(private adminGuard: ADminGuard) {

  }
  ngOnInit() {
      this.adminGuard.canActivate(null, null).then(
    (isAdmin : boolean) => {
      this.isAdmin = isAdmin;
    });
  }
}
