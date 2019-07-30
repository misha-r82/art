import {Comment} from "./comment.model";

export class Article
{
  id: number = -1;
  razdelId : number;
  title: string;
  text: string;
  created: Date;
  updated: Date;
  comments : Comment[];
}
