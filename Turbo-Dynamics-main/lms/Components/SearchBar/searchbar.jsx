import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBar = (OpenSearch, SetOpenSearch) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("../api/lecture/").then((res) => setData(res.data));
  }, []);

  for (let i of data) {
    i.name = i["title"];
  }

  const formatResult = (item) => {
    return (
      <HStack
        onClick={() => SetOpenSearch(OpenSearch == "none" ? "block" : "none")}
      >
        <Text>{item.title.slice(0, 50)}...</Text>
        <Text>{item.subject.slice(0, 50)}...</Text>
      </HStack>
    );
  };

  const handleOnSearch = (string, results) => {
    // results.map
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    // navigate(`/product/${item._id}`)
    // console.log(item)
  };

  return (
    <Stack style={{ width: "40%", left: 340, top: 380, height: 60 }} zIndex={1}>
      <ReactSearchAutocomplete
        items={data}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        formatResult={formatResult}
        fuseOptions={{ keys: ["title", "subject"] }}
      />
    </Stack>
  );
};

export default SearchBar;
