import { useData } from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export { usePlatforms };
