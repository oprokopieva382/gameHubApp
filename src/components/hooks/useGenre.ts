import { useData } from "./useData";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenre = () => useData<Genre>("/genres")

export { useGenre };
