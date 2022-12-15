import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Stack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  Center,
  VStack,
  List,
  Button,
  ListItem,
  ListIcon,
  ButtonGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading fontFamily={"TimesNewRoman"} fontWeight={700} as="h1">
        RADAR CRM PLATFORM
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["CRM", "RADAR"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Powerful, not overpowering
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Finally, a CRM platform that’s both powerful and easy to use. Create
            delightful customer experiences. Have a delightful time doing it.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} /> */}
          <Box>{<br></br>} </Box>
          <Button colorScheme="orange">Start free or get a Demo</Button>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Get started with free tools, or get more with our premium software.
          </Text>
        </Box>
      </Box>
      <Box>{<br></br>} </Box>
      <Box>{<br></br>} </Box>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          The CRM Platform Your Whole Business Will Love
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          HubSpot’s CRM platform has all the tools and integrations you need for
          marketing, sales, content management, and customer service. Each
          product in the platform is powerful alone, but the real magic happens
          when you use them together.
        </Text>
      </Stack>
      <Box>{<br></br>} </Box>
      <Button colorScheme="orange">Start free CRM</Button>
      <SimpleGrid spacing={4} templateColumns="repeat(3, minmax(auto, 2fr))">
        <Center py={6}>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  79
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  79
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  79
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  79
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
        <Center py={6}>
          <Box
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>$</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  79
                </Text>
                <Text color={"gray.500"}>/month</Text>
              </Stack>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  5.000 page views
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 automation executions
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  50 identified users
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  All features
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Start your trial
              </Button>
            </Box>
          </Box>
        </Center>
      </SimpleGrid>
    </Container>
  );
};

export default ArticleList;
