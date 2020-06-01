import styled from "styled-components/native";

export const Container = styled.TouchableHighlight`
 
  width: 325px;
  height: 250px;
  margin: 5px;
  border-radius: 15px;
  margin-top: 15px;
  elevation: 5px;
  
`;

export const Background = styled.ImageBackground`
  flex:1;
  justify-content:space-between;
`;
export const Header = styled.View`
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  margin-left: 10px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const Footer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const FooterButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const FooterText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
