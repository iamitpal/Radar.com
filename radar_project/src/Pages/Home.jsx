import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Stack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Center,
  VStack,
  List,
  Button,
  ListItem,
  ListIcon,
  SimpleGrid,
  Flex,
  useBreakpointValue,
  chakra,
  Grid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";
import { Navigate } from "react-router-dom";
import MarketingHub from "./MarketingHub";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const markbtn = ({ children }) => {
  console.log("clicked");
  return <Navigate to="/marketing" element={<MarketingHub />}></Navigate>;
};

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

const Logo = (props: any) => {
  return (
    <Box>
      <Image
        width={"6rem"}
        src="https://i.ibb.co/drB1T5y/Radar-2.png"
        alt="Logo"
      />
    </Box>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
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
              {/* <Navigate to="/marketing"> */}
              <Button onClick={markbtn} colorScheme="orange">
                Get started
              </Button>
              {/* </Navigate> */}
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
              <Box>{<br></br>}</Box>
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
      <Box>{<br></br>}</Box>
      <Box>{<br></br>}</Box>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#ffbc4b",
                  zIndex: -1,
                }}
              >
                Radar.Com
              </Text>
              <br />{" "}
              <Text color={"#ffbc4b"} as={"span"}>
                Start Growing With Radar Today
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              With tools to make every part of your process more human and a
              support team excited to help you, getting started with inbound has
              never been easier.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"#ffbc4b"}
                color={"white"}
                _hover={{
                  bg: "#ffbc4b",
                }}
              >
                Get a Demo
              </Button>
              <Button rounded={"full"}>Get Sarted Free</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            width={"80rem"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png"
            }
          />
        </Flex>
      </Stack>
      <Box>
        <br></br>
      </Box>
      <Box>
        <br></br>
      </Box>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>Features</Link>
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("green.300", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Stack>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 Chakra Templates. All rights reserved
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
