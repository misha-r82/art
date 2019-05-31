import { Component, OnInit } from '@angular/core';
import {HttpRazdelsService} from '../../services/http.razdels.service'
import {Razdel} from "../razdel.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-razdels',
  templateUrl: './razdels.component.html',
  styleUrls: ['./razdels.component.css'],
  providers:[HttpRazdelsService]
})
export class RazdelsComponent implements OnInit {
  constructor(private router: Router,
              private httpRazdelService : HttpRazdelsService) {
  }
  razdels : Razdel[] = [];
  ngOnInit() {
    this.httpRazdelService.getData().subscribe(
      (data: Razdel[]) => {
        this.razdels = data;

      });
  }
  onSelect(razdel : Razdel)
  {
    this.router.navigate(["razdel", razdel.id]);
  }
}
