import { IArticle } from "../../model/article";
import { ArticleState } from "../../model/articleState";

export const initialState: ArticleState = {
  array: [],
  json: {} as IArticle,
};
