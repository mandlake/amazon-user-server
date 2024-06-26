import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUserById,
  existsUsername,
  findAllUsers,
  findUserById,
  joinId,
  loginId,
  modifiedUserById,
} from "./user.service";
import { initialState } from "./init/userState.init";

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllUsers.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findUserById.fulfilled, (state: any, { payload }: any) => {
        state.json = payload;
      })
      .addCase(modifiedUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(deleteUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(joinId.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      });
  },
});

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.json;
export const getModifiedUserById = (state: any) => state.user.array;
export const getDeleteUserById = (state: any) => state.user.array;
export const getJoinId = (state: any) => state.user.array;

export const {} = userSlice.actions;

export default userSlice.reducer;
