import React from "react";
import { Image } from "react-native";

import {
  Container,
  Story,
  NewStory,
  StoryText,
  BoxStory,
  Thumbnail,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
const Stories = () => {
  return (
    <Container>
      <BoxStory>
        <NewStory>
          <MaterialIcons name="photo-camera" size={25} color="#fff" />
        </NewStory>
        <StoryText>Story</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
      <BoxStory>
        <Story>
          <Thumbnail
            source={{
              uri:
                "https://amplificadigital.com.br/wp-content/uploads/2019/11/amplifica_banner_blog_designer.jpg",
            }}
            resizeMode="cover"
          />
        </Story>
        <StoryText>Profile</StoryText>
      </BoxStory>
    </Container>
  );
};

export default Stories;
