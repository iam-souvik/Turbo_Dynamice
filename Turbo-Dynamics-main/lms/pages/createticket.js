import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineEye } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import {
  Input,
  Text,
  Container,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Textarea,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";

export default function createTicket() {
  const [formData, setformData] = useState({
    category: "",
    title: "",
    message: "",
  });

  const postData = () => {
    axios({
      method: "post",
      url: "../api/ticket/ticket",
      data: formData,
    });
  };

  const handleSubmit = () => {
    postData();
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxW maxH={"max-content"} bg="">
      <Text fontSize={"2xl"} pb="8" pt={"5"} textAlign={"center"}>
        Create Support Ticket
      </Text>
      <Container>
        <Text pb={"2"}>CATEGORY</Text>
        <Select
          name="category"
          placeholder="Select option"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Courses Issue</option>
          <option>Payment Issue</option>
          <option>Platform Issue</option>
        </Select>
        <Text pt={"10"} pb="2">
          TITLE
        </Text>
        <Input
          type={"text"}
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></Input>
        <Text pt={"10"} pb="2">
          MESSAGE
        </Text>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <TfiWrite />
              <Text>Write</Text>
            </Tab>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <AiOutlineEye />
              <Text>Preview</Text>
            </Tab>
            <Tab
              alignItems={"center"}
              justifyContent="space-between"
              gap={"1.5"}
            >
              <BiHelpCircle />
              <Text>Help</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              <Image
                src="https://www.manageengine.com/products/service-desk/help-desk-software/images/what-is-help-desk-software.png"
                alt="help"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box pb={"10"}>
          <Link href="/ticket">
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit Ticket
            </Button>
          </Link>
        </Box>
      </Container>
    </Container>
  );
}
