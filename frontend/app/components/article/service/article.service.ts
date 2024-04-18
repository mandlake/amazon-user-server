import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteArticleAPI,
  findAllArticlesAPI,
  findAllArticlesByBoardIdAPI,
  findArticleByIdAPI,
  modifiedArticleAPI,
  saveArticleAPI,
} from "./article.api";
import { IArticle } from "../model/article";

export const findAllArticles: any = createAsyncThunk(
  "article/findAllArticles",
  async (page: number) => {
    console.log("findArticles page : " + page);
    const data: any = await findAllArticlesAPI(1);
    return data;
  }
);

export const findAllArticlesByBoardId: any = createAsyncThunk(
  "article/findAllArticlesByBoardId",
  async (id: number) => {
    return await findAllArticlesByBoardIdAPI(id);
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

export const saveArticle: any = createAsyncThunk(
  "article/saveArticle",
  async (all: IArticle) => {
    return await saveArticleAPI(all);
  }
);
