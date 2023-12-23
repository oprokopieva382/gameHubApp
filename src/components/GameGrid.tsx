import { Grid } from "@mui/material";
import { useGames } from "./hooks/useGames";
import { GameCard } from "./GameCard";
import { CardSkeleton } from "./CardSkeleton";
import { Genre } from "./hooks/useGenre";
import { FC } from "react";
import { Platform } from "./hooks/usePlatforms";

interface GameGridProps {
  selectedGenre: Genre | null;
   platform: Platform | null;
}

export const GameGrid: FC<GameGridProps> = ({ selectedGenre, platform }) => {
  const { data, error, isLoading } = useGames(selectedGenre, platform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <p>{error && error}</p>
      <Grid
        container
        sx={{ flexGrow: 1, columnGap: 5, rowGap: 5, justifyContent: "center" }}
      >
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
      </Grid>
    </>
  );
};
