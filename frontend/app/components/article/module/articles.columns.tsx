import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { PG } from "@/redux/common/enums/PG";
import { Typography } from "@mui/material";

interface CellType {
  row: ArticleColumns;
}

export default function ArticleColumns(prop: IArticle): GridColDef[] {
  return [
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "id",
      headerName: "ID",
      renderCell: ({ row }: CellType) => (
        <Typography className="text-[12px]">{row.id}</Typography>
      ),
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "title",
      headerName: "Title",
      renderCell: ({ row }: CellType) => (
        <Typography className="text-[12px]">
          <Link href={`${PG.ARTICLE}/detail/${row.id}`} className="underline">
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
      field: "content",
      headerName: "Content",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "registerDate",
      headerName: "RegisterDate",
    },
  ];
}
