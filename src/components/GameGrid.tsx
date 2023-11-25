import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

type Game = {
  id: number;
  name: string;
};

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games");
        console.log(response.data);
        if (response.status === 200) {
          setGames(response.data.results);
        } else {
          setError("Can't get games data");
        }
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchGames();
  }, []);
  return (
    <>
      <p>{error && error}</p>
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};
