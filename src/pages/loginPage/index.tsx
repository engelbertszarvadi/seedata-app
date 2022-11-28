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
import axios from "axios";

const url = process.env.REACT_APP_LOCAL_URL;

export const LoginPage = () => {
  const [loggingError, setLoggingError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [userValues, setUserValues] = useState<LoginInterface>({
    username: "",
    passwordValue: "",
  });

  const hadndleInput =
    (prop: keyof LoginInterface) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserValues({ ...userValues, [prop]: event.target.value });
      setLoggingError(false);
    };

  const handleLogin = () => {
    console.log("Te iubesc Ioana! <3");
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
              <InputLabel color="secondary">Username</InputLabel>
              <OutlinedInput
                color="secondary"
                label="Username"
                type="text"
                value={userValues.username}
                onChange={hadndleInput("username")}
              />
            </FormControl>
            <FormControl sx={classes.forms}>
              <InputLabel color="secondary">Password</InputLabel>
              <OutlinedInput
                color="secondary"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={userValues.passwordValue}
                onChange={hadndleInput("passwordValue")}
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
              LOG IN
            </Button>
            {loggingError && (
              <Alert sx={classes.alert} severity="error">
                Incorrect username or password!
              </Alert>
            )}
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};
