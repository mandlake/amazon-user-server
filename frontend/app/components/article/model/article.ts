import { IBoard } from "../../board/model/board";

export interface IArticle {
  id: number;
  title: string;
  content: string;
  registerDate?: string;
  modDate?: string;
  boardId?: IBoard;
}
