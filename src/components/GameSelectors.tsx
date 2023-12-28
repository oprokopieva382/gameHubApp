import Box from "@mui/material/Box";
import { PlatformSelector } from "./PlatformSelector";
import { SortSelector } from "./SortSelector";
import { GameQuery } from "../App";
import { FC } from "react";

interface GameSelectorsProps {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

export const GameSelectors: FC<GameSelectorsProps> = ({ gameQuery, setGameQuery }) => {
  return (
    <Box style={{marginBottom: "2%"}}>
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
    </Box>
  );
};
