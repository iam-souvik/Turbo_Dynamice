import React, { useEffect, useState } from "react";
import {
  Text,
  Container,
  Center,
  Box,
  Flex,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { authLogout } from "../../redux/auth/action";
import getCookie from "../../cookies/getcookies";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [Auth, setAuth] = useState(null);
 
 const authentication = getCookie("auth");

useEffect(()=>{
  if(authentication===undefined){
    setAuth(false);  
}else{
  setAuth(true);
}
},[authentication])

  

  const {
    userLogout: { message },
  } = useSelector((state) => state.auth);
  const {
    data: { isAuthenticated, user },
  } = useSelector((state) => state.auth);

 
  let cookiename = getCookie("name");
  
  let name;
  if (cookiename) {
    name = cookiename.replaceAll('"', "");
  }
  console.log(name);


  const handleLogout = () => {
    dispatch(authLogout({ message: "Logout successfull" }));
  };
  
  useEffect(()=>{
   if(message.message === "Logout successfull"){
    toast({
      position: "top",
      title: "Logout successfull",
      description: "You have Logged out successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
   }
  },[message.message])

  return (
    <>
      <Container
        maxW={"100%"}
        borderBottom={"2px solid lightgray"}
        display="flex"
        justifyContent={"space-around"}
        alignItems="center"
        p={"0 2rem 0 2rem"}
        bg="teal"
        color={"white"}
      >
        <Box w={"10%"}>
          <Image
            src="https://thumbs.dreamstime.com/z/lms-letter-technology-logo-design-white-background-lms-creative-initials-letter-logo-concept-lms-letter-design-lms-letter-252935662.jpg"
            alt="LMS"
            w={"7.5rem"}
            h="4rem"
          />
        </Box>

        <Box
          w={"75%"}
          h={"5rem"}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          fontSize="1.5rem"
          cursor="pointer"
        >
          <Link href={"../"}>
            <Text>Home</Text>
          </Link>
          <Link href={"./lecture/lectures"}>
            <Text>Lectures</Text>
          </Link>
          <Text>Assignments</Text>
          <Link href={"../ticket"}>
            <Text>Tickets</Text>
          </Link>
          <Link href={"../user/signup"}>
            {Auth || isAuthenticated ?  null :<Button color={"teal"}>SignUp</Button>  }
          </Link>

          <Box>
            {Auth || isAuthenticated ? (
              <Box display={"flex"} gap="22px">
                <Text
                  display={"flex"}
                  justifyContent={"center"}
                  gap="6px"
                  alignItems={"center"}
                >
                  <BiUserCircle />
                  {name}
                </Text>
                <Button color={"teal"} onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Box>
                <Link href={"../user/login"}>
                  <Button color={"teal"}>Login</Button>
                </Link>
              </Box>
            )}
          </Box>
          <Text>
            { (Auth || isAuthenticated) && user.role === "Lecturer" ? (
              <Link href={"../lecture/createlectures"}>
                <Button color={"teal"}>Create Lecture</Button>
              </Link>
            ) : null}
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;


