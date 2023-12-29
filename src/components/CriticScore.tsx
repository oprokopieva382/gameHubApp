import { FC } from "react";
import { StyledBadge } from "../assets/style/CriticScoreStyle.tsx";

type CriticScorePropsType = {
  score: number;
};

export const CriticScore: FC<CriticScorePropsType> = ({ score }) => {
  const color = score > 75 ? "lightgreen" : score > 60 ? "yellow" : "";

  return <StyledBadge sx={{ background: color }}>{score}</StyledBadge>;
};
