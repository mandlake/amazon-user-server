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
import { listButtonTitles } from "@/app/atoms/button/LinkButton";
import { findAllBoards } from "@/app/components/board/service/board.service";

const ArticlesPageByBoardId: NextPage = (props: any) => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticlesByBoardId);
  const [selectedArticle, setSelectedArticle] = useState(props.params.id);
  const link =
    listButtonTitles[parseInt(selectedArticle || props.params.id) - 1];
  const [options, setOptions] = useState([]);

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
    console.log(props.params.id);
  } else {
    console.log("allArticles is undefined");
  }

  const handleSelect = (e: any) => {
    setSelectedArticle(e.target.value);
  };

  useEffect(() => {
    dispatch(findAllArticlesByBoardId(selectedArticle || props.params.id));
    dispatch(findAllBoards(1)).then((res: any) => {
      setOptions(res.payload);
    });
  }, [selectedArticle]);

  const columns = ArticleColumns({} as IArticle);

  return (
    <>
      <form className="mx-auto w-10/12 max-w-2xl p-4">
        <label
          htmlFor="articles"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Article
        </label>
        <select
          id="articles"
          onChange={handleSelect}
          value={selectedArticle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((item: any) => (
            <option key={item.id} title={item.title}>
              {item.content}
            </option>
          ))}
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
