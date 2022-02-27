import React from "react";
import { DripsyProvider } from "dripsy";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => (
  <DripsyProvider theme={theme}>{children}</DripsyProvider>
);
