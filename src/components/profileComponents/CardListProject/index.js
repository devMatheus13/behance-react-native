import React from 'react';
import { FlatList } from 'react-native';

import { Container,Card } from './styles';
import CardList from '../../homeComponents/cardList'
const CardListProject = () => {
  return (
    <Container>
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
        renderItem={({ item }) => <CardList root={true}/>}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

export default CardListProject;