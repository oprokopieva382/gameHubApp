import { Genre, useGenre } from "./hooks/useGenre";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import getCroppedImageUrl from "./../services/getCroppedImageUrl";
import { styled as styledMUI } from "@mui/system";
import CircleLoader from "react-spinners/CircleLoader";
import { errorMessage } from "../utils/notification";
import { FC, useEffect } from "react";

const StyledButton = styledMUI(Button)<{ customcolor?: string }>`
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
const CenteredBox = styledMUI(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

interface GenreListProps {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList: FC<GenreListProps> = ({
  setSelectedGenre,
  selectedGenre,
}) => {
  const { data, isLoading, error } = useGenre();

  useEffect(() => {
    if (error) {
      errorMessage("Something went wrong");
    }
  }, [error]);

  if (isLoading)
    return (
      <CenteredBox>
        <CircleLoader color="#90EE90" />
      </CenteredBox>
    );



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
