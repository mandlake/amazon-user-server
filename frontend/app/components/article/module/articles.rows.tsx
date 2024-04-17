import { getAllArticles } from "@/app/components/article/service/article.slice";
import { useSelector } from "react-redux";
import { IArticle } from "../model/article";

export default function ArticleRows() {
  const allArticles: [] = useSelector(getAllArticles);
  const additionalRows = allArticles?.map((article: IArticle) => ({
    id: article.id,
    title: article.title,
    content: article.content,
  }));

  console.log(additionalRows);

  return [...(additionalRows || [])];
}
