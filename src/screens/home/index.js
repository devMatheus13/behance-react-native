import React,{useRef} from "react";

import { Container, Headerbar, Body, Header } from "./styles";

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
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       <CardList />
       
      </Body>
    </Container>
  );
};

export default Home;