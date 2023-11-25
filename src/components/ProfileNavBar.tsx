import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FC, MouseEvent } from "react";

type PropsType = {
  menuId: string;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
};

export const ProfileNavBar: FC<PropsType> = ({
  menuId,
  handleProfileMenuOpen,
}) => {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
};
