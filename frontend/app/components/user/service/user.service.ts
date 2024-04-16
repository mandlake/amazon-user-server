import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteUserByIdAPI,
  findAllUsersAPI,
  findUserByIdAPI,
  joinIdAPI,
  loginIdAPI,
  modifiedUserByIdAPI,
} from "./user.api";

export const findAllUsers: any = createAsyncThunk(
  "user/findAllUsers",
  async (page: number) => {
    console.log("fetchAllUsers Page: " + page);
    const data: any = await findAllUsersAPI(1);
    return data;
  }
);

export const findUserById: any = createAsyncThunk(
  "user/findUserById",
  async (id: number) => {
    return await findUserByIdAPI(id);
  }
);

export const modifiedUserById: any = createAsyncThunk(
  "user/modifiedUserById",
  async (all: IUser) => {
    return await modifiedUserByIdAPI(all);
  }
);

export const deleteUserById: any = createAsyncThunk(
  "user/deleteUser",
  async (id: number) => {
    return await deleteUserByIdAPI(id);
  }
);

export const joinId: any = createAsyncThunk(
  "user/joinId",
  async (all: IUser) => {
    return await joinIdAPI(all);
  }
);

export const loginId: any = createAsyncThunk(
  "user/loginId",
  async (all: IUser) => {
    return await loginIdAPI(all);
  }
);
