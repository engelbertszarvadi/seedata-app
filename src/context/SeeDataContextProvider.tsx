import { useEffect, useState } from "react";
import { SeeDataContextProviderInterface } from "../interfaces/interfaces";
import { SeeDataContext } from "./SeeDataContext";

const initiateCurrentUser = () => {
  const sessionUser = sessionStorage.getItem("currentUser");

  if (sessionUser) {
    return sessionUser;
  }
  return null;
};

const initiateSelectedLanguage = () => {
  const sessionLanguage = sessionStorage.getItem("selectedLanguage");

  if (sessionLanguage) {
    return sessionLanguage;
  }
  return "en";
};

export const SeeDataContextProvider = ({
  children,
}: SeeDataContextProviderInterface) => {
  const [currentUser, setCurrentUser] = useState<string | null>(
    initiateCurrentUser()
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    initiateSelectedLanguage()
  );

  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem("currentUser", currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (selectedLanguage) {
      sessionStorage.setItem("selectedLanguage", selectedLanguage);
    }
  });

  return (
    <SeeDataContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </SeeDataContext.Provider>
  );
};
