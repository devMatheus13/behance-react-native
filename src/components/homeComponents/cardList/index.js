import React, { useRef } from 'react';

import { Container, Header, Title,SubTitle,Footer,FooterButton,FooterText ,Background} from './styles';
import * as Animatable from 'react-native-animatable'


const AnimatedBack = Animatable.createAnimatableComponent(Background)
const CardList = () => {

  const TouchRef = useRef();

  return (
    <Container  onPress={() => TouchRef.current.pulse()}>
       <AnimatedBack 
        ref={TouchRef}
        duration={500}
        
        useNativeDriver
       source={{uri:'https://cdn.dribbble.com/users/77370/screenshots/4274086/angle-2-dribbble.png'}}
      
       imageStyle={{borderRadius:15}}>
 <Header>
         <Title>Designer Graphic</Title>
         <SubTitle>Beautiful models </SubTitle>
       </Header>
       <Footer>
         <FooterButton>
             <FooterText>Recomendado para você</FooterText>
         </FooterButton>
       </Footer>
         </AnimatedBack>
      
    </Container>
  );
}

export default CardList;