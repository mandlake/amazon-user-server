"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MuiDemoColumns from "@/app/components/demos/mui-demo-columns";
import MuiDemoRows from "@/app/components/demos/mui-demo-rows";
import { NextPage } from "next";

const columns: GridColDef<(typeof rows)[number]>[] = MuiDemoColumns();

const rows = MuiDemoRows();

const DataGridDemoPage: NextPage = () => {
  return (
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
  );
};

export default DataGridDemoPage;
