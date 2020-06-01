import React from "react";
import { View } from "react-native";

import {
  Container,
  Notifications,
  Inbox,
  Header,
  Title,
  SubTitle,
  Message,
  Button,
  ButtonText,
  Body,
  More
} from "./styles";

const Notification = () => {
  return (
    <Container>
      <Inbox>
        <Header>
          <Title>Notificações</Title>
          <More>
          <SubTitle>Ver tudo</SubTitle>
          </More>
         
        </Header>
        <Body>
          <Message bold="bold" size="16">Sem Notificação</Message>
          <Message>
            Você receberá notificações quando alguem avaliar, comentar ou
            coletar seu trabalho.
          </Message>
          <Button>
            <ButtonText>Criar novo Projeto</ButtonText>
          </Button>
        </Body>
      </Inbox>
      <Inbox>
        <Header>
          <Title>Caixa de entrada</Title>
          <More>
          <SubTitle>Ver tudo</SubTitle>
          </More>
         
        </Header>
        <Body>
          <Message bold="bold" size="16">Nenhuma mensagem</Message>
          <Message>
            Encontre e fique conectado com profissionais de criação e
            oportunidade no Behance.
          </Message>
          <Button>
            <ButtonText>Criar nova mensagem</ButtonText>
          </Button>
        </Body>
      </Inbox>
    </Container>
  );
};

export default Notification;
