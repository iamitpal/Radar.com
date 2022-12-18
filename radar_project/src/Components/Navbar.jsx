import { ReactNode } from "react";
import {
  Box,
  Flex,
  Image,
  Avatar,
  Text,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { SiXdadevelopers } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { ImPriceTags } from "react-icons/im";
import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------//
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        className="navbar"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={10}
      >
        <Flex
          h={"100px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image
              width={"6rem"}
              src="https://i.ibb.co/drB1T5y/Radar-2.png"
              alt="Logo"
            />
          </Box>
          <RouterLink to="/">
            <Text fontSize={18}>
              <AiFillHome size={25} />
              Home
            </Text>
          </RouterLink>
          <RouterLink to="/developer">
            <Text fontSize={18}>
              <SiXdadevelopers size={25} />
              Developer Hub
            </Text>
          </RouterLink>
          <RouterLink to="/marketing">
            <Text fontSize={18}>
              <SiMarketo size={25} />
              Marketing Hub
            </Text>
          </RouterLink>
          <RouterLink to="/pricing">
            <Text fontSize={18}>
              <ImPriceTags size={25} />
              Pricing
            </Text>
          </RouterLink>

          <Flex alignItems={"center"}>
            <RouterLink to="/login">
              <Button>Login</Button>
            </RouterLink>
            <RouterLink to="/register">
              <Button>Register</Button>
            </RouterLink>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <MoonIcon size={25} />
                ) : (
                  <SunIcon size={25} />
                )}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
//[url=https://imgbb.com/][img]https://i.ibb.co/wWJDy2r/Radar-1.png[/img][/url]
//[url=https://imgbb.com/][img]https://i.ibb.co/drB1T5y/Radar-2.png[/img][/url]
//[url=https://imgbb.com/][img]https://i.ibb.co/LzsLpwZ/Radar-4.png[/img][/url]
//[url=https://imgbb.com/][img]https://i.ibb.co/mBb56Pm/Radar-5.png[/img][/url]
