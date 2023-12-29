import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  columnGap: theme.spacing(5),
  rowGap: theme.spacing(5),
  justifyContent: "center",
  padding: theme.spacing(2, 1),
}));
