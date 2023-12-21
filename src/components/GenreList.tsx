import { useGenre } from "./hooks/useGenre";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import getCroppedImageUrl from './../services/getCroppedImageUrl';
import {styled} from "@mui/material";

const StyledTypography = styled(Typography)`
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

export const GenreList = () => {
  const { data } = useGenre();
 
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
          <StyledTypography>
            {genre.name}
          </StyledTypography>
        </ListItem>
      ))}
    </List>
  );
};
