import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from "../articles/comment.model";

@Injectable()
export class HttpArticlesService{

  constructor(private http: HttpClient){ }

  getArtList(razdelId : number){
    return this.http.get(`http://localhost:3000/articles/byRazdel/${razdelId}`);
  }
  getArtСontent(artId : number){
    return this.http.get(`http://localhost:3000/articles/byId/${artId}`);

  }
  addComment(data:any)
  {

    return this.http.post(`http://localhost:3000/comments/add/`, data);
  }
  updateComment(data:any)
  {
    console.log("update");
    return this.http.post(`http://localhost:3000/comments/update/`, {});

    let comment = {"commentId":"1"};
      return this.http.post(`http://localhost:3000/comments/update/`, comment);

  }
  delComment(id:number){
    return this.http.post(`http://localhost:3000/comments/delete/`,
      {commentId : id});
  }
}
