import { Language } from "@mui/icons-material";
import {
  IconButton,
  Menu,
  MenuItem,
  PopoverOrigin,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { styles } from "./styles";

const languages = ["RO", "EN"];

export const LanguagePicker = (): JSX.Element => {
  const classes = styles;
  const [anchorLanguage, setAnchorLanguage] = useState<null | HTMLElement>(
    null
  );

  return (
    <div>
      <Tooltip title="Languages">
        <IconButton
          style={classes.languageButton}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setAnchorLanguage(event.currentTarget);
          }}
        >
          <Language />
        </IconButton>
      </Tooltip>
      <Menu
        style={classes.languageMenu}
        anchorEl={anchorLanguage}
        anchorOrigin={classes.transformers as PopoverOrigin}
        transformOrigin={classes.transformers as PopoverOrigin}
        keepMounted
        open={Boolean(anchorLanguage)}
        onClick={() => {
          setAnchorLanguage(null);
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            onClick={() => {
              setAnchorLanguage(null);
            }}
          >
            <Typography>{language}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
