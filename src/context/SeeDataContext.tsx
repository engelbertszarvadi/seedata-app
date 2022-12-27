import { createContext, useContext } from "react";
import { SeeDataContextInterface } from "../interfaces/interfaces";

export const SeeDataContext = createContext<SeeDataContextInterface>({
  currentUser: null,
  setCurrentUser: (value: string | null) => "",
  selectedLanguage: "en",
  setSelectedLanguage: (value: string) => "",
});

export const useSeeDataContext = () => {
  const context = useContext(SeeDataContext);

  if (context === undefined) {
    throw new Error("useSeeDataContext was used outside of Provider");
  }

  return context;
};
