export default function MuiCompanyColumns(prop: ICompany): any[] {
  return [
    { field: "id", headerName: "Id", type: prop.id, width: 90 },
    {
      field: "company",
      headerName: "Company",
      type: prop.company,
      width: 150,
      editable: true,
    },
    {
      field: "contact",
      headerName: "Contact",
      type: prop.contact,
      width: 150,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      type: prop.country,
      width: 150,
      editable: true,
    },
  ];
}
