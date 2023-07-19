import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdModeNight } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Text onClick={toggleColorMode} cursor={"pointer"}>
        {colorMode === "dark" ? <MdLightMode /> : <MdModeNight />}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
