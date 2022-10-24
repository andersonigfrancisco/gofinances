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

interface Props{
  title:string;
  amount:string;
  lstaTrasation:string;
  type: 'up' | 'down' | 'total';

}

const icon = {
  up:'arrow-up-circle',
  down:'arrow-down-circle',
  total:'dollar-sign'
}

export  function Card({
  title,
  amount,
  lstaTrasation,
  type
}:Props){

  return(
    <Container>

      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]}/>
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTrasation>{lstaTrasation}</LastTrasation>
      </Footer>

    </Container>
  );
}