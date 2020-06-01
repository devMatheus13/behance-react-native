import styled from "styled-components/native";
import { color } from "react-native-reanimated";

export const Thumbnail = styled.Image`
  width:100%;
  height:100%;
  border-radius:50px;
  
`;
export const Container = styled.ScrollView.attrs({
  horizontal: true,
 contentContainerStyle: {
    height:100
  },
  showsHorizontalScrollIndicator:false
})`
`;
export const NewStory = styled.TouchableOpacity`
    width:60px;
    height:60px;
    background:#000;
    border-radius:50px;
    justify-content:center;
    align-items:center;
`;

export const Story = styled.TouchableOpacity`
    width:60px;
    height:60px;
    background:#000;
    border-radius:50px;
    border-width:3px;
    border-color: blue; 
`;

export const StoryText = styled.Text`
   font-size:12px;
   color:#000;
  

`;

export const BoxStory = styled.View`
   width:80px;
   height:90px;
   align-items:center;
   padding:10px;
`;
