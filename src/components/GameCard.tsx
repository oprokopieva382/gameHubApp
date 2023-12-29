import { FC } from "react";
import { Game } from "./hooks/useGames";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import { StyledBox, StyledCardMedia } from "../assets/style/GameCardStyle.tsx";

type GameCardType = {
  game: Game;
};

export const GameCard: FC<GameCardType> = ({ game }) => {
  const theme = useTheme();
  return (
    <Card sx={{ boxShadow: theme.shadows[6] }}>
      <StyledCardMedia
        image={getCroppedImageUrl(game.background_image)}
        title={game.name}
        src={game.name}
      />
      <StyledBox>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </StyledBox>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Released: {game.released}
        </Typography>
      </CardContent>
    </Card>
  );
};
