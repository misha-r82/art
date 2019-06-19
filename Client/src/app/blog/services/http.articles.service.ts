import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpArticlesService{

  constructor(private http: HttpClient){ }

  getArtList(razdelId : number){
    return this.http.get(`http://localhost:3000/articles/byRazdel/${razdelId}`);
  }
  getArtСontent(artId : number){
    return this.http.get(`http://localhost:3000/articles/byId/${artId}`);

  }
  addComment(comment:any)
  {
    return this.http.post(`http://localhost:3000/comments/add/`, comment);
  }
  delComment(id:number){
    return this.http.post(`http://localhost:3000/comments/delete/`, {commentId : id});
  }
}
