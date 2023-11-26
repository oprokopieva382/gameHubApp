import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";

type Game = {
  id: number;
  name: string;
};

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
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

    return () => controller.abort(); //*clean up function
  }, []);

  return { games, error };
};

export { useGames };
