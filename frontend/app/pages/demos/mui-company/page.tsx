"use client";

import { Box } from "@mui/material";
import "./article.css";
import { DataGrid } from "@mui/x-data-grid";
import MuiCompanyColumns from "@/app/components/demos/mui-company-columns";
import MuiCompanyRows from "@/app/components/demos/mui-company-rows";
import { NextPage } from "next";

const MuiCompaniesPage: NextPage = () => {
  const columns = MuiCompanyColumns({} as ICompany);
  const rows = MuiCompanyRows();

  return (
    <>
      <h1>게시글 목록</h1>
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
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default MuiCompaniesPage;
