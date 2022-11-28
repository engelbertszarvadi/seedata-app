import { StyledEngineProvider } from "@mui/material/styles";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>
    </div>
  );
};
