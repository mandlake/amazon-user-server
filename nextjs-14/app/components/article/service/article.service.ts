import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteArticleAPI,
  findAllArticlesAPI,
  findArticleByIdAPI,
  modifiedArticleAPI,
} from "./article.api";

export const findAllArticles: any = createAsyncThunk(
  "article/findAllArticles",
  async (page: number) => {
    console.log("findArticles page : " + page);
    const data: any = await findAllArticlesAPI(1);
    return data;
  }
);

export const findArticleById: any = createAsyncThunk(
  "article/findArticleById",
  async (id: number) => {
    return await findArticleByIdAPI(id);
  }
);

export const modifiedArticle: any = createAsyncThunk(
  "article/modifiedArticle",
  async (all: IArticle) => {
    return await modifiedArticleAPI(all);
  }
);

export const deleteArticle: any = createAsyncThunk(
  "article/deleteArticle",
  async (id: number) => {
    return await deleteArticleAPI(id);
  }
);
