import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError, CanceledError } from "axios";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        console.log(response.data);
        if (response.status === 200) {
          setIsLoading(false);
          setGames(response.data.results);
        } else {
          setError("Can't get games data");
          setIsLoading(false);
        }
      } catch (err) {
        if (err instanceof CanceledError) return; //*hide cancelled error
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    fetchGames();

    return () => controller.abort(); //*clean up function
  }, []);

  return { games, error, isLoading };
};

export { useGames };
