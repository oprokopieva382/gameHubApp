import { useState, FC } from "react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { ThemeType } from "../theme";
import { SearchNavBar } from "./SearchNavBar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

export type ThemePropsType = {
  toggleMode: () => void;
  themeMode: ThemeType;
  onSubmit?: (searchText: string) => void;
};

export const NavBar: FC<ThemePropsType> = ({
  toggleMode,
  themeMode,
  onSubmit,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

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
          <SearchNavBar onSubmit={onSubmit} />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row" },
              alignItems: "center",
            }}
          >
            <ColorModeSwitch toggleMode={toggleMode} themeMode={themeMode} />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
