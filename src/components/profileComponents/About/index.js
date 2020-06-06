import React from 'react';
import { View } from 'react-native';

 import { Container ,Box,MiniBox,Count,Description,TextArea,Title,SubTitle} from './styles';
import {Entypo} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
const About = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
     <Box>
       <MiniBox>
         <Count> 0 </Count>
         <Description> Visializações de projeto</Description>
       </MiniBox>
       <MiniBox>
         <Count>0</Count>
         <Description>Curtidas</Description>
       </MiniBox>
       <MiniBox>
         <Count>0</Count>
         <Description>Seguidores</Description>
       </MiniBox>
       <MiniBox>
         <Count>0</Count>
         <Description>Seguindo</Description>
       </MiniBox>
     </Box>
     <Title>Localização</Title>
     <TextArea>
      
       <Entypo name="location-pin" size={25}/>
       <SubTitle>Brazil</SubTitle>
     </TextArea>
     <Title>Foco</Title>
     <TextArea>
       <SubTitle>Designer</SubTitle>
     </TextArea>
     </ScrollView>
    </Container>
  );
}

export default About;