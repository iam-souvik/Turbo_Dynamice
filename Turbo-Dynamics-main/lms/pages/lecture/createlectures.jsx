import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Lectures = () => {
  const [data, setData] = useState({
    title: "",
    subject: "",
    date: "",
    time: "",
    class: "",
    paid: "",
  });

  const postData = () => {
    axios({
      method: "post",
      url: "./api/lecture/createlecture",
      data: data,
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize={"40px"}
        textDecoration={"underline"}
        mt={"2rem"}
        color={"teal"}
      >
        Create Lectuers
      </Text>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        m={"auto"}
        h={"30rem"}
        mt={"4rem"}
        w={"55rem"}
      >
        <Box lineHeight={"50px"} margin={"auto"} pt={"5rem"} w={"35rem"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Enter Title"
              value={data.title}
              required
            />
            <Input
              type="text"
              onChange={handleChange}
              name="subject"
              placeholder="Enter Subject"
              value={data.subject}
              required
            />
            <Input
              type="date"
              onChange={handleChange}
              name="date"
              value={data.date}
              required
            />
            <Input
              type="time"
              onChange={handleChange}
              name="time"
              value={data.time}
              required
            />

            <Select onChange={handleChange} value={data.class} name="class">
              <option>Select Class</option>
              <option value={"class 10"}>class 10</option>
              <option value={"class 11"}>class 11</option>
              <option value={"class 12"}>class 12</option>
            </Select>
            <Select onChange={handleChange} value={data.paid} name="paid">
              <option>Select paid/free</option>
              <option value={"free"}>Free</option>
              <option value={"Paid"}>Paid</option>
            </Select>

            <Input
              type={"submit"}
              bgColor={"teal"}
              color="white"
              w={"100%"}
              textAlign={"center"}
              value={"submit"}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Lectures;
