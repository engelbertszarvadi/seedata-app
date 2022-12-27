import { createTheme } from "@mui/material/styles";

//color values have been used from MUIs color library
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2f3e46", //charcoal 2f3e46
      paper: "#354f52", //darkSlateGrey 354f52
    },
    primary: {
      light: "#b0bec5", ////blueGrey 200
      main: "#37474f", //blueGrey 800
      dark: "#607d8b", //blueGrey 500
      contrastText: "#cad2c5", //ashGrey 200
    },
    secondary: {
      main: "#b0bec5", //blueGrey 200 --ex: textField focus
      contrastText: "#1b2327", //black pearl (found online)
    },
  },
  typography: {},
});
