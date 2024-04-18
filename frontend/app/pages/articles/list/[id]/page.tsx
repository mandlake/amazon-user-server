"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticlesByBoardId } from "@/app/components/article/service/article.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { findAllArticlesByBoardId } from "@/app/components/article/service/article.service";
import ArticleColumns from "@/app/components/article/module/articles.columns";
import { IArticle } from "@/app/components/article/model/article";
import { linkButtonTitles } from "@/app/atoms/button/LinkButton";

const ArticlesPageByBoardId: NextPage = (props: any) => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticlesByBoardId);
  const [selectedArticle, setSelectedArticle] = useState(props.params.id);
  const link =
    linkButtonTitles[3 + parseInt(selectedArticle || props.params.id)];

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
    console.log(props.params.id);
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(findAllArticlesByBoardId(selectedArticle || props.params.id));
  }, [selectedArticle]);

  const columns = ArticleColumns({} as IArticle);

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="articles"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select article
        </label>
        <select
          id="articles"
          onChange={(e: any) => {
            setSelectedArticle(e.target.value);
          }}
          value={selectedArticle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={1}>리뷰 게시판</option>
          <option value={2}>QNA 게시판</option>
        </select>
      </form>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          {link.title}
        </h1>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={allArticles}
            columns={columns}
            className="border border-black"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default ArticlesPageByBoardId;
