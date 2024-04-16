import { instance } from "@/redux/common/configs/axios-config";
import { IBoard } from "../model/board";

export const findAllBoardsAPI = async (page: number) => {
  try {
    const response = await instance.get("/boards/list", {
      params: { page, limit: 10 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const findBoardByIdAPI = async (id: number) => {
  try {
    const response = await instance.get("/boards/detail", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const modifiedBoardAPI = async (all: IBoard) => {
  try {
    const response = await instance.put("/boards/modify", all);
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteBoardAPI = async (id: number) => {
  try {
    const response = await instance.delete("/boards/delete", {
      params: { id },
    });
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};
