import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { darkTheme } from "../themes/darkTheme";
import { ShowDataPage } from "../pages/showDataPage";
import { GenerateReportsPage } from "../pages/generateReportsPage";
import { NavBar } from "../components/navBar/NavBar";

export const Layout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/showData" element={<ShowDataPage />} />
          <Route path="/generateReports" element={<GenerateReportsPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
