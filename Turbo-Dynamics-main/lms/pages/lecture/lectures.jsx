import { useEffect, useState } from "react";
import { Box, Image, Text, Select, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import SearchBar from "../../Components/SearchBar/searchbar";
import Link from "next/link";

const lectures = () => {
  const [data, Setdata] = useState([]);

  useEffect(() => {
    axios.get("../api/lecture/").then((res) => Setdata(res.data));
  }, []);

  const handleSort = (e) => {
    switch (e.target.value) {
      case "nhl":
        {
          Setdata(
            [...data].sort((a, b) => {
              if (a.subject > b.subject) {
                return 1;
              }
              if (a.subject < b.subject) {
                return -1;
              }
              return 0;
            })
          );
        }
        break;

      case "nlh":
        {
          Setdata(
            [...data].sort((a, b) => {
              if (a.subject < b.subject) {
                return 1;
              }
              if (a.subject > b.subject) {
                return -1;
              }
              return 0;
            })
          );
        }

        break;

      case "phl":
        {
          Setdata(
            [...data].sort((a, b) => {
              if (a.paid > b.paid) {
                return 1;
              }
              if (a.paid < b.paid) {
                return -1;
              }
              return 0;
            })
          );
        }
        break;

      case "plh":
        {
          Setdata(
            [...data].sort((a, b) => {
              if (a.paid < b.paid) {
                return 1;
              }
              if (a.paid > b.paid) {
                return -1;
              }
              return 0;
            })
          );
        }

        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap="10px"
        width={"850px"}
        height="200px"
        ml={260}
      >
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lRxyxWRCsTuDxeWUPgBiJK0lBHFGsBd_Eg&usqp=CAU" />
        <Image src="https://i0.wp.com/bestlearns.in/wp-content/uploads/2020/07/Capture-48.png?fit=627%2C418&ssl=1" />
        <Image
          src="https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2019/11/25/CBSE-Class-12-Syllabus.webp"
          w={"250px"}
          height="200px"
        />
      </Box>

      <Box display="flex" justifyContent="center" mt={8}>
        {/* <BsSearch fontSize="26px" /> */}
        <SearchBar />
      </Box>
      <Box
        textAlign={"center"}
        width="20%"
        margin={"auto"}
        backgroundColor="teal"
        mt={10}
      >
        <Select
          placeholder="Sort by Features"
          fontSize="22px"
          border="none"
          onChange={handleSort}
        >
          <option value="phl">Sort By Paid: Free</option>
          <option value="plh">Sort By paid: Paid</option>
          <option value="nhl">Sort By Subject: A To Z</option>
          <option value="nlh">Sort By Sub: D to A</option>
        </Select>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="40px"
        textAlign="center"
        w="950px"
        margin={"auto"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        mt={10}
      >
        {data.map((item) => {
          return (
            <div>
              <Link href={`${item._id}`}>
                <Box id="image_box" mt={10}>
                  {/* <img src={item.image} ></img> */}
                  <Text
                    id="text_title"
                    fontSize={"18px"}
                    color="teal"
                    fontWeight="semibold"
                  >
                    {" "}
                    Subject: {item.subject}
                  </Text>
                  <Text id="text_name" fontSize={"18px"} fontWeight="bold">
                    {" "}
                    Title: {item.title}
                  </Text>
                  <Text id="text_offer" fontWeight="semibold">
                    {" "}
                    Leacture Time: {item.time}
                  </Text>
                  <Text id="text_price" fontWeight="semibold">
                    Starting date :{item.date}
                  </Text>
                  <Text id="text_price" fontWeight="semibold">
                    Class:{item.class}
                  </Text>
                  <Text
                    id="text_price"
                    fontSize={"18px"}
                    color="red"
                    fontWeight="semibold"
                  >
                    Paid Option: {item.paid}
                  </Text>
                </Box>
              </Link>
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default lectures;
