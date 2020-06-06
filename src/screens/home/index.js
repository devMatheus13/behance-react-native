import React,{useRef} from "react";

import { Container, Headerbar, Body, Header } from "./styles";
import {FlatList} from 'react-native'
import Stories from "../../components/homeComponents/stories";
import CardList from "../../components/homeComponents/cardList";

;




const Home =  () => {
 

  return (
    <Container>
      <Header>
        <Stories />
      </Header>

      <Body>
      <FlatList
         showsVerticalScrollIndicator={false}
        data={[{
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e297d72',
          title: 'Third Item',
        }]}
        renderItem={({ item }) => <CardList />}
        keyExtractor={item => item.id}
      />
       
      </Body>
    </Container>
  );
};

export default Home;