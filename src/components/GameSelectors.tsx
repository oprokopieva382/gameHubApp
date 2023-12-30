import { FC } from "react";
import { PlatformSelector } from "./PlatformSelector";
import { SortSelector } from "./SortSelector";
import { GameQuery } from "../App";
import { StyledBox } from "../assets/style/GameSelectorsStyle";

interface GameSelectorsProps {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

export const GameSelectors: FC<GameSelectorsProps> = ({ gameQuery, setGameQuery }) => {
  return (
    <StyledBox>
      <PlatformSelector
        platform={gameQuery.platform}
        setPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
      />
      <SortSelector
        sortOrder={gameQuery.sortOrder}
        onSelectSortOrder={(sortOrder) =>
          setGameQuery({ ...gameQuery, sortOrder })
        }
      />
    </StyledBox>
  );
};
