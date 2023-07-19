import React from "react";
import useGames, { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={game.background_image} borderRadius={3} />
        <Heading paddingTop={2} fontSize="1xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
