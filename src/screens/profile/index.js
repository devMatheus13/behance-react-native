import React from 'react';
import { Text } from 'react-native';

import { Container,Header, Body, Thumbnail,ProfileText,Picture ,BoxIcons,IconText } from './styles';
import {FontAwesome, AntDesign, Ionicons, SimpleLineIcons} from '@expo/vector-icons'

import ProfileRoutes from '../../routes/Profile.routes'
const Profile = () => {
  return (
     <Container>
        <Header>
           <FontAwesome name="gear" size={25}/>
           <SimpleLineIcons name="options-vertical" size={20}/>
        </Header>
        <Thumbnail>
          <Picture/>
        </Thumbnail>
        <Body>
          <ProfileText>Matheus Lucas</ProfileText>
          <BoxIcons>
          <AntDesign name="like1" size={15} color="#322153"/>
          <IconText>0</IconText>
          <Ionicons name="md-person-add" size={15} color="#322153"/>
          <IconText>0</IconText>
          <Ionicons name="md-person-add" size={15} color="#322153"/>
          <IconText>0</IconText>
          </BoxIcons>
        </Body>
        <ProfileRoutes/>
     </Container>
    );
}

export default Profile;