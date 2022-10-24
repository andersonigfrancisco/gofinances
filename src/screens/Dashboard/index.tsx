import React from 'react';
import { Card } from '../../components/Card';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  CardContente

} from './styles';

import { ScrollView } from 'react-native';

export function Dashboard() {

  return (
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62631267?v=4' }} />
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>Anderson</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>

      <CardContente>
        <Card type='up' title='Entradas' amount='R$ 17.400,00' lstaTrasation='Última entrada dia 13 de abril' />
        <Card type='down' title='Saídas' amount='R$ 1.259,00' lstaTrasation='Última saída dia 03 de abril'/>
        <Card type='total' title='Total' amount='R$ 16.141,00' lstaTrasation='01 à 16 de abril'/>
      </CardContente>


    </Container>
  );
}