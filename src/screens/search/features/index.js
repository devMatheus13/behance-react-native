import React from "react";


import { Container, Body } from "./styles";

import CardSearchList from '../../../components/searchComponents/cardSearchList'
const Features = () => {
  return (
    <Container>
      <Body>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
        <CardSearchList/>
      </Body>
    </Container>
  );
};

export default Features;
