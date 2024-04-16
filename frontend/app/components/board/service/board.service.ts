import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteBoardAPI,
  findAllBoardsAPI,
  findBoardByIdAPI,
  modifiedBoardAPI,
} from "./board.api";

export const findAllBoards: any = createAsyncThunk(
  "board/findAllBoards",
  async (page: number) => {
    console.log("findBoards page : " + page);
    const data: any = await findAllBoardsAPI(1);
    return data;
  }
);

export const findBoardById: any = createAsyncThunk(
  "articles/findArticleById",
  async (id: number) => {
    return await findBoardByIdAPI(id);
  }
);

export const modifiedBoard: any = createAsyncThunk(
  "article/modifiedBoard",
  async (all: IArticle) => {
    return await modifiedBoardAPI(all);
  }
);

export const deleteBoard: any = createAsyncThunk(
  "article/deleteBoard",
  async (id: number) => {
    return await deleteBoardAPI(id);
  }
);
