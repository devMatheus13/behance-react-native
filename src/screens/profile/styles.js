import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  
`;
export const Header = styled.View`
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  background: #f0f0f0;
  height: 120px;
`;
export const Thumbnail = styled.View`
   width:120px;
   height:120px;
   background:red;
   position:absolute;
   top:50px;
   left:35%;
   border-radius:100px;
   border-width:8px;
   border-color:#fff;
`;
export const Picture = styled.Image``;

export const Body = styled.View`
margin-top:60px;
   align-items:center;
   justify-content:center;
`;
export const ProfileText = styled.Text`
 font-weight:bold;
 font-size:20px;
 color:#322153;
`;

export const BoxIcons = styled.View`
  margin-top:10px;
   justify-content:space-between;
   flex-direction:row;
`;
export const IconText = styled.Text`
   font-weight:bold;
   font-size:12px;
   color:#322153;
   margin-left:10px;
    margin-right:10px;
`;
