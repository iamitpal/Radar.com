import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Starter
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Email automation
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Form automation
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Landing pages Optimization
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Email and in-app chat support
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("#ffbc4b", "red.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Professional
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Omni-channel marketing automation
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Multi-language content
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Campaign management
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  A/B testing
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Website traffic analytics
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Custom reporting
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Video hosting & management
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Social Media
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="yellow">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Enterprise
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MANAGE YOUR TEAMS & BRANDS
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                EXTEND THE PLATFORM
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                ADVANCE YOUR REPORTING
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
