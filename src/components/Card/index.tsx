import React  from "react";

import {
  Container,
  Header,
  Icon,
  Title,
  Footer,
  Amount,
  LastTrasation,
  
} from './styles';

export  function Card(){

  return(
    <Container>

      <Header>
        <Title>Entradas</Title>
        <Icon name='arrow-up-circle'/>
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTrasation>Última entrada dia 13 de abril</LastTrasation>
      </Footer>

    </Container>
  );
}