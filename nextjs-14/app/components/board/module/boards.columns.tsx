import { GridColDef } from "@mui/x-data-grid";
import { IBoard } from "../model/board";
import Link from "next/link";
import { PG } from "@/redux/common/enums/PG";
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
      field: "boardName",
      headerName: "BoardName",
      renderCell: ({ row }: CellType) => (
        <Typography>
          <Link
            href={`${PG.BOARD}/detail/${row.id}`}
            passHref
            className="underline"
          >
            {row.boardName}
          </Link>
        </Typography>
      ),
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "boardType",
      headerName: "BoardType",
      renderCell: ({ row }: CellType) => (
        <Typography>{row.boardType}</Typography>
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
