import React from "react";
import { View } from "react-native";

import { Header, InputSearch, SearchButton, PhotoButton } from "./styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const HeaderBar = () => {
  return (
    <Header>
      <SearchButton>
        <MaterialIcons name="search" size={30} color="#cbcbcb" />
      </SearchButton>

      <InputSearch />
      <PhotoButton>
        <Ionicons name="md-options" size={30} color="#454545" />
      </PhotoButton>
    </Header>
  );
};

export default HeaderBar;
