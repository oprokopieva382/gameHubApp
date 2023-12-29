import { FC } from "react";
import { Genre, useGenre } from "./hooks/useGenre";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import getCroppedImageUrl from "./../services/getCroppedImageUrl";
import {
  StyledButton,
  StyledCardMedia,
  StyledTypography,
} from "../assets/style/GenreListStyle";

interface GenreListProps {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList: FC<GenreListProps> = ({
  setSelectedGenre,
  selectedGenre,
}) => {
  const { data } = useGenre();

  return (
    <List>
      <StyledTypography variant="h5">Genres</StyledTypography>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <StyledCardMedia
            image={getCroppedImageUrl(genre.image_background)}
          ></StyledCardMedia>
          <StyledButton
            customcolor={genre.id === selectedGenre?.id ? "#90EE90" : undefined}
            onClick={() => {
              setSelectedGenre(genre);
            }}
          >
            {genre.name}
          </StyledButton>
        </ListItem>
      ))}
    </List>
  );
};
