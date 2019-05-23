import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpArticlesService{

  constructor(private http: HttpClient){ }

  getData(razdelId : number){
    return this.http.get(`http://localhost:3000/articles/byRazdel/${razdelId}`);
  }
}
