export interface IArticle {
  id: number;
  title: string;
  content: string;
  board?: number;
  user?: number;
  registerDate?: string;
  modDate?: string;
}
