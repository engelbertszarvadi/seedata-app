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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSeeDataContext } from "../../context/SeeDataContext";

const pages = ["SHOW DATA", "GENERATE REPORTS"];

export const NavBar = (): JSX.Element | null => {
  const classes = styles;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
  const { currentUser } = useSeeDataContext();

  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  const handleMenuClose = () => {
    setAnchorMenu(null);
    setAnchorUser(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate("/");
    sessionStorage.removeItem("currentUser");
  };

  const editLink = (pages: string, isLink?: boolean) => {
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
    if (isLink) return `/${editedEndpoint.join("")}`;
    return `${editedEndpoint.join("")}`;
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
                disableRipple
                key={page}
                sx={classes.buttons}
                color="secondary"
                onClick={() => {
                  handleMenuClose();
                  navigate(editLink(page, true));
                }}
              >
                {t(`${editLink(page)}`)}
              </Button>
            ))}
            <Menu
              sx={classes.dropdownMenu}
              anchorEl={anchorMenu}
              anchorOrigin={classes.transformers as PopoverOrigin}
              transformOrigin={classes.transformers as PopoverOrigin}
              open={!!anchorMenu}
              onClick={handleMenuClose}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleMenuClose();
                    navigate(editLink(page, true));
                  }}
                >
                  {t(`${editLink(page)}`)}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid container item alignItems="center" justifyContent="flex-end" xs>
            <LanguagePicker />
            <Tooltip title="Settings">
              <IconButton
                sx={classes.iconButton}
                disableRipple
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorUser(event.currentTarget);
                }}
              >
                <Avatar
                  sx={classes.avatar}
                  alt={currentUser?.toUpperCase()}
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
            open={!!anchorUser}
            onClick={handleMenuClose}
          >
            <Button
              sx={classes.logoutButton}
              disableRipple
              key="logout"
              onClick={handleLogout}
            >
              {t("logout").toUpperCase()}
            </Button>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
