import { FC } from "react";
import { GameQuery } from "../App";
import { StyledTypography } from "../assets/style/GameHeadingStyle";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  
  return <StyledTypography variant="h4">{heading}</StyledTypography>;
};
