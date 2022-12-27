import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { LoginInterface } from "../../interfaces/interfaces";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { styles as classes } from "./styles";
import { LanguagePicker } from "../../components/languagePicker/LanguagePicker";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSeeDataContext } from "../../context/SeeDataContext";
import { loginAPI } from "../../api/loginAPI";

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setCurrentUser } = useSeeDataContext();

  const [loggingError, setLoggingError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userValues, setUserValues] = useState<LoginInterface>({
    username: "",
    password: "",
  });

  const hadndleInput =
    (prop: keyof LoginInterface) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserValues({ ...userValues, [prop]: event.target.value });
      setLoggingError(false);
    };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  };

  const handleLogin = async () => {
    if ((await loginAPI(userValues)) === false) {
      setLoggingError(false);
      setCurrentUser(userValues.username);
      navigate("/home");
    } else setLoggingError(true);
  };

  return (
    <div style={classes.main}>
      <Paper sx={classes.paper} variant="outlined">
        <Stack sx={classes.mainStack}>
          <Box sx={classes.languageButton}>
            <LanguagePicker />
          </Box>
          <Stack sx={classes.formsStack} spacing={3}>
            <FormControl sx={classes.forms}>
              <InputLabel color="secondary">{t("username")}</InputLabel>
              <OutlinedInput
                color="secondary"
                label={t("username")}
                type="text"
                error={loggingError}
                value={userValues.username}
                onChange={hadndleInput("username")}
                onKeyDown={handleKeydown}
              />
            </FormControl>
            <FormControl sx={classes.forms}>
              <InputLabel color="secondary">{t("password")}</InputLabel>
              <OutlinedInput
                color="secondary"
                label={t("password")}
                type={showPassword ? "text" : "password"}
                error={loggingError}
                value={userValues.password}
                onChange={hadndleInput("password")}
                onKeyDown={handleKeydown}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              sx={classes.forms}
              color="secondary"
              variant="contained"
              onClick={handleLogin}
            >
              {t("login")}
            </Button>
            {loggingError && (
              <Alert sx={classes.alert} severity="error">
                {t("loggingError")}
              </Alert>
            )}
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};
