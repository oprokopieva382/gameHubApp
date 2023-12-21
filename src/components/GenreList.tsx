import { useGenre } from "./hooks/useGenre";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import getCroppedImageUrl from './../services/getCroppedImageUrl';

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
            sx={{width: "32px", height: "32px", marginRight: "9px", borderRadius: 1}}
          ></CardMedia>
          <Typography>{genre.name}</Typography>{" "}
        </ListItem>
      ))}
    </List>
  );
};
