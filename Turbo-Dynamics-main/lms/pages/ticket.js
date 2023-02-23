import {
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Ticket() {
  const [data, setdata] = useState([]);
  const getData = () => {
    axios.get("http://localhost:3000/api/ticket").then((res) => {
      setdata(res.data);
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Flex
        justifyContent={"space-around"}
        mt="5"
        border={"1px"}
        height="50px"
        alignItems={"center"}
        borderColor="gray.500"
        borderRadius="25px"
      >
        <Text fontSize={"2xl"}>Support Tickets</Text>
        <Link href="/createticket">
          <Button colorScheme="blue">Create Ticket</Button>
        </Link>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>category</Th>
              <Th>title</Th>
              <Th>message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ id, category, title, message }) => (
              <Tr key={id}>
                <Td>{category}</Td>
                <Td>{title}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button colorScheme="teal">
                        Click to seen your Message
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader background-color={"blue.100"}>
                        Your Message!
                      </PopoverHeader>
                      <PopoverBody>{message}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
