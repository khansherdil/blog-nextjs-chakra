import React from "react";
import { useColorMode, IconButton, Flex } from "@chakra-ui/react";
import { WiMoonAltFirstQuarter, WiMoonAltFull } from "react-icons/wi";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <IconButton
        icon={
          colorMode === "light" ? <WiMoonAltFirstQuarter /> : <WiMoonAltFull />
        }
        isRound="true"
        p={4}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default DarkModeSwitch;
