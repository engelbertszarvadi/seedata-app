import { Language } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Menu,
  PopoverOrigin,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSeeDataContext } from "../../context/SeeDataContext";
import i18next from "../../i18next";
import { styles } from "./styles";

const languages = ["en", "ro"];

export const LanguagePicker = (): JSX.Element => {
  const classes = styles;
  const { t } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useSeeDataContext();

  const [anchorLanguage, setAnchorLanguage] = useState<null | HTMLElement>(
    null
  );

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      <Tooltip title={t("languages")}>
        <IconButton
          disableRipple
          sx={classes.languageButton}
          color={"error"}
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
          <Button
            sx={classes.menuItemButton}
            disableRipple
            key={language}
            onClick={() => {
              setAnchorLanguage(null);
              setSelectedLanguage(language as string);
            }}
          >
            <Typography>{language.toUpperCase()}</Typography>
          </Button>
        ))}
      </Menu>
    </div>
  );
};
