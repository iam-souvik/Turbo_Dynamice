import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";

// import { useEffect, useState } from 'react'
// // import io from 'socket.io-client'
// // let socket;

// const Home = () => {
//   const [input, setInput] = useState('')

//   useEffect(() => socketInitializer(), [])

//   const socketInitializer = async () => {
//     await fetch('/api/socket');
//     socket = io()

//     socket.on('connect', () => {
//       console.log('connected')
//     })

//     socket.on('update-input', msg => {
//       setInput(msg)
//     })
//   }

//   const onChangeHandler = (e) => {
//     setInput(e.target.value)
//     socket.emit('input-change', e.target.value)
//   }

//   return (
//     <input
//       placeholder="Type something"
//       value={input}
//       onChange={onChangeHandler}
//     />
//   )
// }

// export default Home;

import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  let timeOut = useRef();

  const [num, setNum] = useState(0);

  const titleArr = ["VALUABLE", "AFFORDABLE", "RELIABLE", "TRUSTABLE"];

  const setTitleName = () => {
    if (num === titleArr.length - 1) {
      setNum(0);
    } else {
      setNum((prev) => prev + 1);
    }
  };

  useEffect(() => {
    timeOut.current = setInterval(() => {
      setTitleName();
    }, 1500);

    return () => {
      clearInterval(timeOut.current);
    };
  });

  return (
    <>
      <Container maxW={"100%"} p={"1"}>
        <Box
          // border={"2px solid black"}
          display="flex"
          gap={"1rem"}
          justifyContent={"end"}
          alignItems="center"
          marginTop={"2rem"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          borderRadius={"2rem"}
          marginBottom="4rem"
        >
          <Box w="50%" p={"1rem"}>
            <Text fontSize="4rem" fontWeight={"700"}>
              THE MOST <span style={{ color: "#5A4BDA" }}>{titleArr[num]}</span>
            </Text>
            <Text fontSize="4rem" fontWeight={"700"}>
              LEARNING PLATFORM
            </Text>
            <Text fontSize={"2rem"} fontStyle="italic">
              Learn from our best faculty.
            </Text>
          </Box>
          <Box w="50%">
            <Image
              src="https://news.cgtn.com/news/2020-10-10/Overcoming-the-digital-divide-in-online-education-UtQ3NUNOM0/img/60e933395aef48f2a3e77d7962aa7ec4/60e933395aef48f2a3e77d7962aa7ec4.jpeg"
              alt="e-learning with teacher and classmates"
              w={"100%"}
              borderTopRightRadius={"2rem"}
              borderBottomRightRadius={"2rem"}
            />
          </Box>
        </Box>

        <Box bg={"lightgray"} p="1" m="1" maxW="100%" marginBottom={"4rem"}>
          <Heading p="2rem" w={"35rem"}>
            Explore Exam <span style={{ color: "#5A4BDA" }}>Categories</span>
          </Heading>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(25rem, 1fr))"
            bg={"white"}
            maxW="75%"
            margin={"auto"}
            marginBottom={"1rem"}
          >
            <Card>
              <CardHeader>
                <Heading size="md"> Class 10th Batches</Heading>
              </CardHeader>
              <CardBody>
                <Text>View your classes details here</Text>
              </CardBody>
              <CardFooter
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                // border="1px solid black"
                p={"0"}
                paddingLeft="1rem"
              >
                <Button>Explore</Button>
                <Image
                  src="https://cityspideynews.s3.amazonaws.com/uploads/spidey/userfiles/images/Akshat%20Jain.jpg"
                  alt="student"
                  w="8rem"
                  h={"6rem"}
                  borderTopLeftRadius={"2rem"}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Class 11th Batches</Heading>
              </CardHeader>
              <CardBody>
                <Text>View your classes details here</Text>
              </CardBody>
              <CardFooter
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                // border="1px solid black"
                p={"0"}
                paddingLeft="1rem"
              >
                <Button>Explore</Button>
                <Image
                  src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/06/young-1822682_1280.jpg?w=1280&ssl=1"
                  alt="student"
                  w="8rem"
                  h={"6rem"}
                  borderTopLeftRadius={"2rem"}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Class 12th Batches</Heading>
              </CardHeader>
              <CardBody>
                <Text>View your classes details here</Text>
              </CardBody>
              <CardFooter
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                // border="1px solid black"
                p={"0"}
                paddingLeft="1rem"
              >
                <Button>Explore</Button>
                <Image
                  src="https://trak.in/wp-content/uploads/2019/05/Untitled-design-7.jpg"
                  alt="student"
                  w="8rem"
                  h={"6rem"}
                  borderTopLeftRadius={"2rem"}
                />
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>

        <Box
          p="3rem"
          m="1"
          bg={"teal"}
          color="white"
          textAlign={"center"}
          marginBottom="5rem"
        >
          <Heading>India's Most Loved Educational Platform</Heading>
          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
            margin={"auto"}
            p="3rem"
          >
            <Card color={"white"}>
              <CardHeader>
                <Heading size="md" fontSize="2.5rem">
                  {" "}
                  8 M+
                </Heading>
              </CardHeader>
              <CardBody marginTop={"-2rem"}>
                <Text fontSize={"1.5rem"}>Happy Students</Text>
              </CardBody>
            </Card>
            <Card color={"white"}>
              <CardHeader>
                <Heading size="md" fontSize="2.5rem">
                  {" "}
                  13700 +
                </Heading>
              </CardHeader>
              <CardBody marginTop={"-2rem"}>
                <Text fontSize={"1.5rem"}>Video Lectures</Text>
              </CardBody>
            </Card>
            <Card color={"white"}>
              <CardHeader>
                <Heading size="md" fontSize="2.5rem">
                  {" "}
                  2500 +
                </Heading>
              </CardHeader>
              <CardBody marginTop={"-2rem"}>
                <Text fontSize={"1.5rem"}>Mock Test</Text>
              </CardBody>
            </Card>
            <Card color={"white"}>
              <CardHeader>
                <Heading size="md" fontSize="2.5rem">
                  {" "}
                  70000 +
                </Heading>
              </CardHeader>
              <CardBody marginTop={"-2rem"}>
                <Text fontSize={"1.5rem"}>Questions</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        <Box
          display="flex"
          gap={"10rem"}
          justifyContent="center"
          lineHeight={"6rem"}
          marginBottom="5rem"
          borderBottom={"2px solid lightgray"}
        >
          <Box>
            <Heading>Features & Benefits</Heading>
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
              <Image src="https://www.pw.live/version14/assets/img/group-19446.svg" />
              <Text fontSize={"1.5rem"}>
                Live Scheduled Lectures by best faculties of India
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
              <Image src="https://www.pw.live/version14/assets/img/group-19444.svg" />
              <Text fontSize={"1.5rem"}>
                Interactive classes for better understanding
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
              <Image src="https://www.pw.live/version14/assets/img/group-19445.svg" />
              <Text fontSize={"1.5rem"}>Classes with online setting</Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
              <Image src="https://www.pw.live/version14/assets/img/group-19445.svg" />
              <Text fontSize={"1.5rem"}>
                Personalized attention for all students
              </Text>
            </Box>
          </Box>
          <Box marginBottom={"3rem"}>
            <Image src="https://www.pw.live/version14/assets/img/pathshala.svg" />
          </Box>
        </Box>

        <Box
          textAlign="center"
          alignItems={"center"}
          alignContent={"center"}
          marginBottom="5rem"
        >
          <Heading fontSize={"3rem"} marginBottom="1rem">
            Learn From The Best
          </Heading>
          <Text color={"gray"} fontSize="1.5rem" marginBottom={"2.5rem"}>
            Explore the concepts with India’s most experienced Teachers!
          </Text>
          <Center>
            <Image
              src="https://thumbs.dreamstime.com/b/group-different-teachers-white-background-181139131.jpg"
              w={"70%"}
              h="50rem"
              boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              borderRadius={"3rem"}
            />
          </Center>
        </Box>
      </Container>
    </>
  );
};

export default Home;
