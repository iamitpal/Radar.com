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
  Flex,
  useBreakpointValue,
  chakra,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";

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
                bg={useColorModeValue("orange.50", "orange.900")}
                p={2}
                px={3}
                color={"orange.500"}
                rounded={"full"}
              >
                Marketing Hub
              </Text>
              <Box>{<br></br>} </Box>

              <Text color={"gray.600"} fontSize={"m"}>
                Marketing software to help you grow traffic, convert more
                visitors, and run complete inbound marketing campaigns at scale.
              </Text>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Lead generation
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Marketing automation
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Analytics
                </ListItem>
              </List>
              <Box>{<br></br>} </Box>
              <Button colorScheme="orange">Get started</Button>
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
                bg={useColorModeValue("orange.50", "orange.900")}
                p={2}
                px={3}
                color={"orange.500"}
                rounded={"full"}
              >
                Sales Hub
              </Text>
              <Box>{<br></br>} </Box>

              <Text color={"gray.600"} fontSize={"m"}>
                Sales CRM software to help you get deeper insights into
                prospects, automate the tasks you hate, and close more deals
                faster.
              </Text>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Advanced CRM
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Meeting scheduling
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Payments
                </ListItem>
              </List>
              <Box>{<br></br>} </Box>
              <Button colorScheme="orange">Get started</Button>
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
                bg={useColorModeValue("orange.50", "orange.900")}
                p={2}
                px={3}
                color={"orange.500"}
                rounded={"full"}
              >
                Service Hub
              </Text>
              <Box>{<br></br>} </Box>

              <Text color={"gray.600"} fontSize={"m"}>
                Customer service software to help you connect with customers,
                exceed expectations, and turn them into promoters who grow your
                business.
              </Text>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Tickets
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Customer feedback
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Knowledge base
                </ListItem>
              </List>
              <Box>{<br></br>} </Box>
              <Button colorScheme="orange">Get started</Button>
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
                bg={useColorModeValue("orange.50", "orange.900")}
                p={2}
                px={3}
                color={"orange.500"}
                rounded={"full"}
              >
                CMS Hub
              </Text>
              <Box>{<br></br>} </Box>

              <Text color={"gray.600"} fontSize={"m"}>
                Content management software that’s flexible for marketers,
                powerful for developers, and gives customers a personalized,
                secure experience.
              </Text>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Drag-and-drop editor
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  SEO recommendations
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Website themes
                </ListItem>
              </List>
              <Box>{<br></br>} </Box>
              <Button colorScheme="orange">Get started</Button>
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
                bg={useColorModeValue("orange.50", "orange.900")}
                p={2}
                px={3}
                color={"orange.500"}
                rounded={"full"}
              >
                Operations Hub
              </Text>
              <Box>{<br></br>} </Box>

              <Text color={"gray.600"} fontSize={"m"}>
                Operations software that syncs your apps, cleans and curates
                customer data, and automates processes — so all your systems and
                teams work better together.
              </Text>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Data sync
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Programmable automation
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#dd6b20" />
                  Data quality automation
                </ListItem>
              </List>
              <Box>{<br></br>} </Box>
              <Button colorScheme="orange">Get started</Button>
            </Box>
          </Box>
        </Center>
      </SimpleGrid>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Text
              color={"white"}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Learn and grow with award-winning support and a thriving community
              behind you.
            </Text>
            <Text
              fontSize={useBreakpointValue({ base: "xl", md: "xl" })}
              color={"white"}
            >
              Monetize your content by charging your most loyal readers and
              reward them loyalty points. Give back to your loyal readers by
              granting them access to your pre-releases and sneak-peaks.
            </Text>
            <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
              <chakra.h1
                color={"white"}
                textAlign={"center"}
                fontSize={"4xl"}
                py={10}
                fontWeight={"bold"}
              >
                Radar.com Achievements
              </chakra.h1>
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
                color={"white"}
              >
                <Grid
                  justify={"center"}
                  textAlign={"center"}
                  px={{ base: 4, md: 8 }}
                  py={"5"}
                  shadow={"xl"}
                  border={"1px solid"}
                  borderColor={useColorModeValue("white", "white")}
                  rounded={"lg"}
                >
                  {" "}
                  <FaHandshake size={40} />
                  <Text
                    color={"white"}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                    textAlign={"left"}
                  >
                    100+
                  </Text>
                  <Heading
                    textTransform={"uppercase"}
                    fontSize={"2xl"}
                    color={useColorModeValue("white", "white")}
                  >
                    Radar user groups
                  </Heading>
                </Grid>
                <Grid
                  justify={"center"}
                  textAlign={"center"}
                  px={{ base: 4, md: 8 }}
                  py={"5"}
                  shadow={"xl"}
                  border={"1px solid"}
                  borderColor={useColorModeValue("white", "white")}
                  rounded={"lg"}
                >
                  {" "}
                  <RiCustomerService2Fill size={40} />
                  <Text
                    color={"white"}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                    textAlign={"left"}
                  >
                    158,000+
                  </Text>
                  <Heading
                    textTransform={"uppercase"}
                    fontSize={"2xl"}
                    color={useColorModeValue("white", "white")}
                  >
                    Customers
                  </Heading>
                </Grid>
                <Grid
                  justify={"center"}
                  textAlign={"center"}
                  px={{ base: 4, md: 8 }}
                  py={"5"}
                  shadow={"xl"}
                  border={"1px solid"}
                  borderColor={useColorModeValue("white", "white")}
                  rounded={"lg"}
                >
                  {" "}
                  <GiEarthAmerica size={40} />
                  <Text
                    color={"white"}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                    textAlign={"left"}
                    ml={8}
                  >
                    6+
                  </Text>
                  <Heading
                    textTransform={"uppercase"}
                    fontSize={"2xl"}
                    color={useColorModeValue("white", "white")}
                  >
                    Languages
                  </Heading>
                </Grid>
              </SimpleGrid>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default ArticleList;
