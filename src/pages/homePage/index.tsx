import { Grid, Paper } from "@mui/material";
import { styles as classes } from "./styles";

export const HomePage = () => {
  return (
    <Grid
      sx={classes.main}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        sm={12}
        md={4}
      >
        <Paper sx={classes.paper} elevation={1}>
          .
        </Paper>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        sm={12}
        md={4}
      >
        <Paper sx={classes.paper} elevation={1}>
          .
        </Paper>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        sm={12}
        md={4}
      >
        <Paper sx={classes.paper} elevation={1}>
          .
        </Paper>
      </Grid>
    </Grid>
  );
};
