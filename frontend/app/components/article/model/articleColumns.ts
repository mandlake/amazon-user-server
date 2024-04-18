import { IBoard } from "../../board/model/board";

export interface ArticleColumns {
  id?: number;
  title?: string;
  content?: string;
  registerDate?: string;
  modDate?: string;
  board?: IBoard;
}
