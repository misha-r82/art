import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpArticlesService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('user.json')
  }
}
