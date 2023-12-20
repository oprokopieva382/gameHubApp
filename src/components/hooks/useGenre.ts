import { useData } from "./useData";

export type Genre = {
  id: number;
  name: string;
};

const useGenre = () => useData<Genre>("/genres")

export { useGenre };
