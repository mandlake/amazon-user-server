import { instance } from "@/redux/common/configs/axios-config";

export const findAllUsersAPI = async (page: number) => {
  try {
    const response = await instance.get("/users/list", {
      params: { page, size: 5, limit: 5 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log("fail");
    console.log(error);
    return error;
  }
};

export const findUserByIdAPI = async (id: number) => {
  try {
    const response = await instance.get("/users/detail", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const modifiedUserByIdAPI = async (all: IUser) => {
  try {
    const response = await instance.put("/users/modify", all);
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteUserByIdAPI = async (id: number) => {
  try {
    const response = await instance.delete("/users/delete", {
      params: { id },
    });
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const joinIdAPI = async (all: IUser) => {
  try {
    const response = await instance.post("/users/save", all);
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginIdAPI = async (user: IUser) => {
  try {
    const response = await instance.post("/users/login", user);
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};
