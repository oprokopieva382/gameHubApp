import { FC } from "react";
import { Game } from "./hooks/useGames";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";


type GameCardType = {
  game: Game;
};

export const GameCard: FC<GameCardType> = ({ game }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 450, boxShadow: theme.shadows[6] }}>
      <CardMedia
        sx={{ height: 160 }}
        image={getCroppedImageUrl(game.background_image)}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of game in future
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </Box>

      {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
};
