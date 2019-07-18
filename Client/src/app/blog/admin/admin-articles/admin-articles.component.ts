import { Component, OnInit } from '@angular/core';
import {HttpArticlesService} from "../../services/http.articles.service";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  constructor( private httpArtService : HttpArticlesService) { }

  ngOnInit() {
  }

}
