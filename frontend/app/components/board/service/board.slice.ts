import { createSlice } from "@reduxjs/toolkit";
import { findAllBoards, findBoardById } from "./board.service";
import { initialState } from "./init/boardState.init";

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
      });
  },
});

export const getAllBoards = (state: any) => state.board.array;
export const getSingleBoard = (state: any) => {
  console.log(state.board);
  return state.board.array;
};

export const {} = boardSlice.actions;

export default boardSlice.reducer;
