import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { darkTheme } from "../themes/darkTheme";
import { ShowDataPage } from "../pages/showDataPage";
import { GenerateReportsPage } from "../pages/generateReportsPage";
import { NavBar } from "../components/navBar/NavBar";
import { ProtectedRoute } from "../components/protectedRoute/protectedRoute";
import { useSeeDataContext } from "../context/SeeDataContext";

export const Layout = () => {
  const { currentUser } = useSeeDataContext();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute isLogged={!!currentUser}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/showData"
            element={
              <ProtectedRoute isLogged={!!currentUser}>
                <ShowDataPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/generateReports"
            element={
              <ProtectedRoute isLogged={!!currentUser}>
                <GenerateReportsPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
