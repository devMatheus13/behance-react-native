import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:5px;
  text-transform:uppercase;
`;
export const InputSearch = styled.TextInput`
  flex:1;
  background: #f0f0f0;
  height: 45px;
  margin: 0 16px;
  border-radius: 30px;
  padding-left:50px;
  padding-right:50px;
  font-weight:bold;
  color:#454545;
  
`;
export const SearchButton = styled.TouchableOpacity`

  position:absolute;
  z-index:5;
  left:40px;
`;

export const PhotoButton = styled.TouchableOpacity`
 position:absolute;
  z-index:5;
  right:40px;
`;
