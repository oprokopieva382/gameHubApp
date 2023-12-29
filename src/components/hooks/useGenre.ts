import genres from "../../data/genres"

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenre = () => ({ data: genres, isLoading: false, error: null });

export { useGenre };
