import { useData } from "./useData";

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


const useGames = () => useData<Game>("/games");

export { useGames };
