import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError, CanceledError } from "axios";

export type Genre = {
  id: number;
  name: string;
};

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchGenreResponse>("/genres", {
          signal: controller.signal,
        });
        console.log(response.data);
        if (response.status === 200) {
          setIsLoading(false);
          setGenres(response.data.results);
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

  return { genres, error, isLoading };
};

export { useGenre };
