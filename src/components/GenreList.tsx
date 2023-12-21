import { useGenre } from "./hooks/useGenre";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import getCroppedImageUrl from "./../services/getCroppedImageUrl";
import { styled as styledMUI } from "@mui/system";
import CircleLoader from "react-spinners/CircleLoader";
import { errorMessage } from "../utils/notification";


const StyledTypography = styledMUI(Typography)`
  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 960px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;
const CenteredBox = styledMUI(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (isLoading)
    return (
      <CenteredBox>
        <CircleLoader color="#90EE90" />
      </CenteredBox>
    );

  if (error) {
    errorMessage("Something went wrong");
    return null;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <CardMedia
            component="img"
            image={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            sx={{
              width: "32px",
              height: "32px",
              marginRight: "9px",
              borderRadius: 1,
            }}
          ></CardMedia>
          <StyledTypography>{genre.name}</StyledTypography>
        </ListItem>
      ))}
        </List>
  );
};
