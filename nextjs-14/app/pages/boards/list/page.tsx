"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { IBoard } from "@/app/components/board/model/board";
import BoardRows from "@/app/components/board/module/boards.rows";
import BoardColumns from "@/app/components/board/module/boards.columns";

const ArticlesPage: NextPage = ({ data }: any) => {
  const dispatch = useDispatch();
  const allBoards: [] = useSelector(getAllBoards);

  if (allBoards !== undefined) {
    console.log("allBoards is defined");
    console.log(allBoards);
  } else {
    console.log("allBoards is undefined");
  }

  useEffect(() => {
    dispatch(findAllBoards(1));
  }, []);

  const columns = BoardColumns({} as IBoard);
  const rows = BoardRows();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          게시글 종류
        </h1>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
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
