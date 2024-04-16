import { instance } from "@/redux/common/configs/axios-config";

export const findAllArticlesAPI = async (page: number) => {
  try {
    const response = await instance.get("/articles/list", {
      params: { page, limit: 10 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const findArticleByIdAPI = async (id: number) => {
  try {
    const response = await instance.get("/articles/detail", {
      params: { id },
    });
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const modifiedArticleAPI = async (all: IArticle) => {
  try {
    const response = await instance.put("/articles/modify", all);
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteArticleAPI = async (id: number) => {
  try {
    const response = await instance.delete("/articles/delete", {
      params: { id },
    });
    console.log("success");
    return response.data;
  } catch (error) {
    return error;
  }
};
