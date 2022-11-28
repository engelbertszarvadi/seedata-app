import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Grid,
  PopoverOrigin,
} from "@mui/material";
import { styles } from "./styles";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { LanguagePicker } from "../languagePicker/LanguagePicker";
import { Link, useLocation } from "react-router-dom";

const pages = ["SHOW DATA", "GENERATE REPORTS"];

const currentUser = "engi";

export const NavBar = (): JSX.Element | null => {
  const classes = styles;

  const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  const handleMenuClose = () => {
    setAnchorUser(null);
    setAnchorMenu(null);
  };

  const editLink = (pages: string) => {
    const editedEndpoint = pages
      .split(" ")
      .map((element: string, index: number) => {
        if (index === 0) {
          return element.toLowerCase();
        } else {
          let firstLetter = element.charAt(0);
          return firstLetter + element.slice(1).toLowerCase();
        }
      });
    return `/${editedEndpoint.join("")}`;
  };

  return (
    <AppBar sx={classes.appbar} position="fixed">
      <Toolbar disableGutters>
        <Grid
          sx={classes.main}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            xs={8}
          >
            <Link style={classes.title} to="/home">
              <Typography sx={classes.title} variant="h4" noWrap>
                SEE-DATA
              </Typography>
            </Link>
            <Tooltip title="Menu">
              <IconButton
                sx={classes.pagesMenu}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorMenu(event.currentTarget);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            {pages.map((page) => (
              <Button
                key={page}
                sx={classes.buttons}
                color="secondary"
                onClick={handleMenuClose}
              >
                <Link style={classes.link} to={editLink(page)}>
                  {page}
                </Link>
              </Button>
            ))}
            <Menu
              sx={classes.dropdownMenu}
              anchorEl={anchorMenu}
              anchorOrigin={classes.transformers as PopoverOrigin}
              transformOrigin={classes.transformers as PopoverOrigin}
              keepMounted
              open={Boolean(anchorMenu)}
              onClick={handleMenuClose}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleMenuClose}>
                  <Link style={classes.link} to={editLink(page)}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid container item alignItems="center" justifyContent="flex-end" xs>
            <LanguagePicker />
            <Tooltip title="Settings">
              <IconButton
                sx={classes.iconButton}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorUser(event.currentTarget);
                }}
              >
                <Avatar
                  sx={classes.avatar}
                  alt={currentUser.toUpperCase()}
                  src="/static/images/avatar"
                />
              </IconButton>
            </Tooltip>
          </Grid>
          <Menu
            sx={classes.dropdownMenu}
            anchorEl={anchorUser}
            anchorOrigin={classes.transformers as PopoverOrigin}
            transformOrigin={classes.transformers as PopoverOrigin}
            keepMounted
            open={Boolean(anchorUser)}
            onClick={handleMenuClose}
          >
            <MenuItem key="logout" onClick={handleMenuClose}>
              <Link style={classes.link} to="/">
                LOG OUT
              </Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
