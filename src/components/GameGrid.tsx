import Grid from "@mui/material/Grid";
import { useGames } from "./hooks/useGames";
import { GameCard } from "./GameCard";
import { CardSkeleton } from "./CardSkeleton";
import { FC, useEffect } from "react";
import { GameQuery } from "../App";
import { errorMessage } from "../utils/notification";
import "react-toastify/dist/ReactToastify.css";
import { StyledGrid } from "../assets/style/GameGridStyle";

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid: FC<GameGridProps> = ({ gameQuery }) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (error) {
      errorMessage("Can't find the game");
    }
  }, [error]);

  return (
    <StyledGrid container>
      {isLoading &&
        skeletons.map((skeleton, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <CardSkeleton key={skeleton} />
          </Grid>
        ))}
      {data &&
        data.map((game) => (
          <Grid key={game.id} item xs={12} sm={6} md={4} lg={3}>
            <GameCard game={game} />
          </Grid>
        ))}
    </StyledGrid>
  );
};
