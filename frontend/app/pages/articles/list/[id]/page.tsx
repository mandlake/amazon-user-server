"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { findAllArticlesByBoardId } from "@/app/components/article/service/article.service";
import ArticleColumns from "@/app/components/article/module/articles.columns";
import { IArticle } from "@/app/components/article/model/article";
import MoveButton from "@/app/atoms/button/MoveButton";
import { PG } from "@/app/components/common/enums/PG";
import { findBoardById } from "@/app/components/board/service/board.service";
import { IBoard } from "@/app/components/board/model/board";

const ArticlesPageByBoardId: NextPage = (props: any) => {
  const dispatch = useDispatch();
  const [allArticles, setAllArticles] = useState([]);
  const [board, setBoard] = useState([] as IBoard);

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(findAllArticlesByBoardId(props.params.id)).then((res: any) => {
      setAllArticles(res.payload);
    });
    dispatch(findBoardById(props.params.id)).then((res: any) => {
      setBoard(res.payload);
      console.log(res.payload.content);
    });
  }, []);

  const columns = ArticleColumns({} as IArticle);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          {board.content}
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
        <div className="m-3">
          <MoveButton title={"목록으로 돌아가기"} path={`${PG.BOARD}/list`} />
        </div>
      </div>
    </>
  );
};

export default ArticlesPageByBoardId;
