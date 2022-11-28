export const styles = {
  appbar: {
    height: "65px",
  },
  main: {
    margin: "15px",
  },
  title: {
    fontFamily: "monospace",
    fontWeight: "700",
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
  },
  buttons: {
    marginLeft: "10px",
    color: "inherit",
    "&:hover": {
      backgroundColor: "transparent",
    },
    display: {
      xs: "none",
      md: "flex",
    },
  },
  pagesMenu: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    display: {
      xs: "flex",
      md: "none",
    },
  },
  languageButton: {
    color: "inherit",
  },
  iconButton: {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  avatar: {
    color: "inherit",
  },
  dropdownMenu: {
    marginTop: "55px",
  },
  transformers: {
    vertical: "top",
    horizontal: "right",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
};
