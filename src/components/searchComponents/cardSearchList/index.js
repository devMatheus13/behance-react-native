import React from "react";

import { Image } from "react-native";
import { Container, Picture } from "./styles";

const CardSearchList = () => {
  return (
    <Container>
      <Picture
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGHvXMJ1mjW-issvwjaG9vnVLLZ-czfDa0XbiJBbM4gGnqQlrh&usqp=CAU",
        }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default CardSearchList;
