import { Component, OnInit } from '@angular/core';
import {HttpRazdelsService} from '../../services/http.razdels.service'
import {Razdel} from "../razdel.model";
@Component({
  selector: 'app-razdels',
  templateUrl: './razdels.component.html',
  styleUrls: ['./razdels.component.css'],
  providers:[HttpRazdelsService]
})
export class RazdelsComponent implements OnInit {
  private httpRazdelService: HttpRazdelsService;

  constructor(httpRazdelService : HttpRazdelsService) {
    this.httpRazdelService = httpRazdelService;
  }
  razdels : Razdel[] = [];
  ngOnInit() {
    this.httpRazdelService.getData().subscribe(
      (data: Razdel[]) => {
        console.log(data);
        this.razdels = data;

      });
  }
}
