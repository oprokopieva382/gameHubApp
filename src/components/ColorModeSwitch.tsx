import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { FC } from "react";
import { ThemePropsType } from "./NavBar";



export const ColorModeSwitch: FC<ThemePropsType> = ({ toggleMode, themeMode }) => {
  return (
    <>
      {themeMode.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
        {themeMode.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

