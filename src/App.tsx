import { StyledEngineProvider } from "@mui/material/styles";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { SeeDataContextProvider } from "./context/SeeDataContextProvider";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <SeeDataContextProvider>
          <Layout />
        </SeeDataContextProvider>
      </StyledEngineProvider>
    </div>
  );
};
