import { Grid } from "@mui/material";
import { useGames } from "./hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      <p>{error && error}</p>
      <Grid container sx={{ flexGrow: 1, columnGap: 2, rowGap: 2 }}>
        {games &&
          games.map((game) => (
            <Grid key={game.id} xs={12} sm={6} md={4} lg={3}>
              <GameCard game={game} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
