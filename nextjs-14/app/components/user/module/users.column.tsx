import { PG } from "@/redux/common/enums/PG";
import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

export default function UserColumns(prop: UserColumns): GridColDef[] {
  return [
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "id",
      headerName: "ID",
      renderCell: ({ row }) => <Typography>{row.id}</Typography>,
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "username",
      headerName: "Username",
      renderCell: ({ row }) => (
        <Typography>
          <Link
            href={`${PG.USER}/detail/${row.id}`}
            passHref
            className="underline"
          >
            {row.username}
          </Link>
        </Typography>
      ),
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "password",
      headerName: "Password",
      renderCell: (params) =>
        params.value ? "*".repeat(params.value.length) : "********",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "name",
      headerName: "Name",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "phoneNumber",
      headerName: "PhoneNumber",
    },
    {
      flex: 0.04,
      minWidth: 30,
      width: 150,
      sortable: false,
      field: "address",
      headerName: "Address",
    },
  ];
}
