"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArticleRows from "@/app/components/article/module/articles.rows";
import { findAllArticles } from "@/app/components/article/service/article.service";
import ArticleColumns from "@/app/components/article/module/articles.columns";

const ArticlesPage: NextPage = ({ data }: any) => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticles);

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(findAllArticles(1));
  }, []);

  const columns = ArticleColumns({} as IArticle);
  const rows = ArticleRows();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          게시글 목록
        </h1>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
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

export default ArticlesPage;
