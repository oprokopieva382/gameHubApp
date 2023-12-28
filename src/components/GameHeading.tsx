import Typography  from "@mui/material/Typography";
import { GameQuery } from "../App";
import { FC } from "react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return <Typography variant="h4" style={{textAlign: "center"}}>{heading}</Typography>;
};
