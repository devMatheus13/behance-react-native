import React from "react";
import { View } from "react-native";

import { Container} from "./styles";

import SearchHeader from '../../components/searchComponents/searchHeader'
import SearchBar from '../../routes/Search.routes'
const Search = () => {
  return (
    <Container>
        <SearchHeader/>
           <SearchBar/>
    </Container>
  );
};

export default Search;
