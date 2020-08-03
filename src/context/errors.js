import { createContext } from "react";

export const initialErrorState = {
  msg: "",
};

export const ErrorContext = createContext(null);
