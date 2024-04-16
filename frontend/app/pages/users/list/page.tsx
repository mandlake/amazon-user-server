"use client";

import UserColumns from "@/app/components/user/module/users.column";
import UserRows from "@/app/components/user/module/users.rows";
import { findAllUsers } from "@/app/components/user/service/user.service";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserArticlesPages: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllUsers(1));
  }, []);

  const columns = UserColumns({} as UserColumns);
  const rows = UserRows();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          이용자 목록
        </h1>

        <Box sx={{ height: 400, width: "90%" }}>
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

export default UserArticlesPages;
