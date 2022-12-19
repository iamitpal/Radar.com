import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function FollowButtonWithShadow(props: ButtonProps) {
  const { authState, logoutUser } = useContext(AuthContext);

  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        onClick={logoutUser}
        fontSize={"sm"}
        rounded={"full"}
        bg={"#ffbc4b"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        Logout
      </Button>
    </Flex>
  );
}
