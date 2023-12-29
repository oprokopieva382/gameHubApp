import { createTheme, Theme } from "@mui/material/styles";

export type ThemeType = Theme;

const lightTheme: ThemeType = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme: ThemeType = createTheme({
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };