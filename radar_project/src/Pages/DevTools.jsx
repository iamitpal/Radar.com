import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Image,
  IconProps,
} from "@chakra-ui/react";

export default function DevTools() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          The Service Tools You Need to Put Customers First{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          SoftwareReviews recognized Service Hub as a leader and gold medalist
          in its 2022 Customer Service Management Report, based on the input
          from HubSpot users.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Image
            src="https://www.hubspot.com/hubfs/JTBD%201_Unify%20your%20Teams%20and%20Channels%20(Option%201).png"
            alt="Radar"
          />
        </Flex>
      </Stack>
    </Container>
  );
}

//DevTools
