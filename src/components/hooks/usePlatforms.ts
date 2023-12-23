import { useData } from "./useData";

export type Platform = {
  id: number;
  name: string;
};

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export { usePlatforms };
