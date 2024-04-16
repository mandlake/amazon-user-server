import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBoard,
  findAllBoards,
  findBoardById,
  modifiedBoard,
} from "./board.service";
import { initialState } from "./board.init";

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllBoards.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findBoardById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(modifiedBoard.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(deleteBoard.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllBoards = (state: any) => state.board.array;
export const getBoardById = (state: any) => state.board.array;
export const getModifiedBoard = (state: any) => state.board.array;
export const getDeleteBoard = (state: any) => state.board.array;

export const {} = boardSlice.actions;

export default boardSlice.reducer;
