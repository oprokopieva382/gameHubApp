import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig
        });
        if (response.status === 200) {
          setIsLoading(false);
          setData(response.data.results);
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
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export { useData };
