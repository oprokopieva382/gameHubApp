import { useGames } from "./hooks/useGames";

export const GameGrid = () => {
  const {games, error} = useGames()
  return (
    <>
      <p>{error && error}</p>
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};
