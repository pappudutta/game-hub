import React from "react";
import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={20} paddingX={3} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
