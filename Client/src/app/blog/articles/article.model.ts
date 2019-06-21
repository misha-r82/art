import {Comment} from "./comment.model";

export class Article
{
  id: number;
  razdelId : number;
  title: string;
  text: string;
  created: Date;
  updated: Date;
  comments : Comment[];
}
