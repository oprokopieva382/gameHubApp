import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export const StyledButton = styled(Button)<{ customcolor?: string }>`
  text-transform: lowercase;
  margin: 0 auto;

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 960px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }

  &.MuiButton-root {
    color: ${(props) => (props.customcolor ? props.customcolor : "inherit")};
  }
`;

export const StyledTypography = styled(Typography)`
  padding: 10px;
`;

export const StyledCardMedia = styled(CardMedia)`
  width: 32px;
  height: 32px;
  margin-right: 9px;
  border-radius: 10px;
  object-fit: cover;
`;
