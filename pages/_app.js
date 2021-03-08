import "../styles/globals.css";
import Link from "next/link";
import { ChakraProvider, Flex, Text, Container } from "@chakra-ui/react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { VscFoldDown } from "react-icons/vsc";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex justify="space-between" m={2}>
        <Menu>
          <MenuButton>
            <VscFoldDown />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">About</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <DarkModeSwitch />
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
