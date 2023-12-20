import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError, CanceledError } from "axios";


interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [genres, setGenres] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
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

export { useData };
