import { createContext, useState } from "react";
import { getTheme } from "../Components/utils/Theme";
import { ThemeProvider } from "@emotion/react";
export const MyThemeContext = createContext();

export const MyThemeProviderContext = ({ children }) => {
  const [mode, setmode] = useState("dark");

  const ToggleMode = () => {
    setmode((prev) => (prev == "dark" ? "light" : "light"));
  };

  const theme = getTheme(mode);

  return (
    <MyThemeContext.Provider value={{ ToggleMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};
