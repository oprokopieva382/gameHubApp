import { Badge } from "@mui/material";
import { FC } from "react";

type CriticScorePropsType = {
  score: number;
};

export const CriticScore: FC<CriticScorePropsType> = ({ score }) => {
  const color = score > 75 ? "lightgreen" : score > 60 ? "yellow" : "";

  return (
    <>
      <Badge
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          padding: 0.7,
          background: color,
          borderRadius: 1,
          color: "#717789",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {score}
      </Badge>
    </>
  );
};
