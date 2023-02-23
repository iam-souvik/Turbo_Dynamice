import { Box,  Input,  Text,useToast } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from "../../redux/auth/action";
import {useRouter} from "next/router"

const Login = () => {
  const dispatch = useDispatch();
  const { userLogin: { loading, error, message } } = useSelector(state => state.auth);
  const toast = useToast();
  const router=useRouter()

  const [data, setData] = useState({
    email: "",
    password: "",   
  });


  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(authLogin({ email: data.email, password:data.password}));
  };

  useEffect(() => {
  if(loading){
    <Box>Loading....</Box>
  }
  else if(message === 'login successfull'){
      router.replace("/")
    toast({
      position: 'top',
      title: message,
      description: "You have successfully Logged in!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    }
    if(error){
      toast({ 
        position: 'top',
        title: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [message,error])


  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize={"40px"}
        mt={"2rem"}
        color={"teal"}
      >
        Login Page
      </Text>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        m={"auto"}
        h={"20rem"}
        mt={"6rem"}
        w={"40rem"}
      >
        <Box lineHeight={"50px"} margin={"auto"} pt={"3rem"} w={"35rem"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              value={data.email}
              placeholder="Enter Your email"
              required
            />
            <Input
              type="password"
              onChange={handleChange}
              value={data.password}
              name="password"
              placeholder="enter Your Password"
              required
            />
            
            
            <Input
              bgColor={"teal"}
              color="white"
              w={"100%"}
              textAlign={"center"}
              _hover={"none"}
              type="submit"
              value="submit"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
