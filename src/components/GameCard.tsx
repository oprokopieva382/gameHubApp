import { FC } from "react";
import { Game } from "./hooks/useGames";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type GameCardType ={
    game: Game
}

export const GameCard: FC<GameCardType> = ({game}) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={game.background_image}
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
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
}

