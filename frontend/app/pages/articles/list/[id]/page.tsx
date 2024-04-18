"use client";

import { useEffect } from "react";
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
  const button = linkButtonTitles[3 + parseInt(props.params.id)];

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
    console.log(props.params.id);
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(findAllArticlesByBoardId(props.params.id));
  }, []);

  const columns = ArticleColumns({} as IArticle);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          {button.title}
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
