import { useData } from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

const useGames = (selectedGenre: Genre | null, platform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, parent_platforms: platform?.id } },
    [selectedGenre?.id, platform?.id]
  );

export { useGames };
