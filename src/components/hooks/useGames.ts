import { useData } from "./useData";
import { Genre } from "./useGenre";

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


const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);

export { useGames };
