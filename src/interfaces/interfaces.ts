import { ReactNode } from "react";

export interface LoginInterface {
  username: string;
  password: string;
}

export interface ProtectedRouteInterface {
  isLogged: boolean | null;
  redirectPath?: string;
  children: JSX.Element;
}

export interface SeeDataContextInterface {
  currentUser: string | null;
  setCurrentUser: (value: string | null) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
}

export interface SeeDataContextProviderInterface {
  children?: ReactNode;
}
