import { useState, MouseEvent, FC } from "react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { ThemeType } from "../theme";
import { SearchNavBar } from "./SearchNavBar";
import { ProfileNavBar } from "./ProfileNavBar";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

export type ThemePropsType = {
  toggleMode: () => void;
  themeMode: ThemeType;
};

export const NavBar: FC<ThemePropsType> = ({ toggleMode, themeMode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Game Hub
          </Typography>
          <SearchNavBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row" }, // Change the direction for small screens
              alignItems: "center",
            }}
          >
            <ColorModeSwitch toggleMode={toggleMode} themeMode={themeMode} />
            <ProfileNavBar
              menuId={menuId}
              handleProfileMenuOpen={handleProfileMenuOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
