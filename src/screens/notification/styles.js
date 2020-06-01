import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Inbox = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px;
  border-radius: 10px;
  padding: 25px;
  elevation:5px;
`;
export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #322153;
`;
export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #322153;
`;
export const Body = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const Message = styled.Text`
 font-weight: ${props => props.bold ? props.bold : 'bold'} ;
 font-size:${props => props.size ? props.size : '14'}px;
 color:#a9b4be;
  text-align: center;
  margin:5px;
`;
export const Button = styled.TouchableOpacity`
   background:#00f;
   width:50%;
   height:45px;
   align-items:center;
   justify-content:center;
   border-radius:50px;
   margin-bottom:10px;
`;
export const ButtonText = styled.Text`
font-weight:bold;
font-size:14px;
color:#fff
`;


export const More = styled.TouchableOpacity``;
