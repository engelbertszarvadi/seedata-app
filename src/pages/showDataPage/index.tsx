import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { DataGridRows } from "../../components/dataGridComponents/rows/index";
import { styles as classes } from "./styles";

export const ShowDataPage = () => {
  const { t } = useTranslation();

  const columns = [
    {
      field: "id",
      headerName: t("idName"),
    },
    {
      field: "value",
      headerName: t("valueName"),
      flex: 1,
      minWidth: 150,
    },
    {
      field: "unit",
      headerName: t("unitName"),
      flex: 1,
      minWidth: 150,
    },
    {
      field: "uploadDate",
      headerName: t("uploadDate"),
      flex: 1,
      minWidth: 150,
    },
    {
      field: "description",
      headerName: t("description"),
      flex: 1,
      minWidth: 300,
    },
  ];

  return (
    <div style={classes.main}>
      <DataGrid
        sx={classes.dataGrid}
        disableSelectionOnClick={true}
        disableColumnMenu={true}
        autoPageSize={true}
        rows={DataGridRows()}
        getRowId={(row) => row.id}
        columns={columns}
      />
    </div>
  );
};
