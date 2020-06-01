import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  flex:1;
 justify-content:center;
 align-items:center;
`;

export const Body = styled.ScrollView.attrs({
 contentContainerStyle: {
  flexDirection:"row",
  flexWrap:"wrap",
  marginHorizontal:20,
  },
})`
`;
