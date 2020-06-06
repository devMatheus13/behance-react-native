import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
 background:#fff;
 padding:10px;
`;
export const Box = styled.View`
   justify-content:space-between;
   flex:1;
   flex-direction:row;
   flex-wrap:wrap;
`;

export const MiniBox = styled.View`
 width:150px;
 height:60px;
 background:#f0f0f0;
 margin:10px;
 border-radius:10px;
 padding:5px;
 justify-content:center;
 align-items:center;
`;
export const Count = styled.Text`
  font-weight:bold;
  font-size:20px;
`;
export const Description = styled.Text`
font-weight:bold;
font-size:14px;
`;
export const TextArea = styled.View`

  flex-direction:row;
  align-items:center;
  
`;
export const Title = styled.Text`
  font-weight:bold;
  font-size:16px;
  margin:10px;
  
`;
export const SubTitle = styled.Text`
  font-size:16px;
  margin-left:5px;
`;
