import { GridColDef } from "@mui/x-data-grid";
import { IBoard } from "../model/board";
import Link from "next/link";
import { PG } from "@/app/components/common/enums/PG";
import { Typography } from "@mui/material";

interface CellType {
  row: BoardColumns;
}

export default function BoardColumns(prop: IBoard): GridColDef[] {
  return [
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "id",
      headerName: "ID",
      renderCell: ({ row }: CellType) => <Typography>{row.id}</Typography>,
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "title",
      headerName: "Title",
      renderCell: ({ row }: CellType) => (
        <Typography>
          <Link
            href={`${PG.BOARD}/detail/${row.id}`}
            passHref
            className="underline"
          >
            {row.title}
          </Link>
        </Typography>
      ),
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "description",
      headerName: "Description",
      renderCell: ({ row }: CellType) => (
        <Typography>{row.description}</Typography>
      ),
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "registerDate",
      headerName: "RegisterDate",
      renderCell: ({ row }: CellType) => (
        <Typography>{row.registerDate}</Typography>
      ),
    },
  ];
}
