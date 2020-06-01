import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator:false
})`
  flex: 1;
  background: #fff;
`;

export const Headerbar = styled.ScrollView.attrs({
  horizontal: true,
 contentContainerStyle: {
    backgroundColor:'#ff1',
    flex:1,
    height:100
  },
})`
`;

export const Header = styled.View`
   margin-top:15px;
   margin:0 10px;
`;
export const Body = styled.View`
   flex:1;
   justify-content:center;
   align-items:center;
`;

