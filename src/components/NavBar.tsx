import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo1.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"} />
      <Text>Nav Items</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
