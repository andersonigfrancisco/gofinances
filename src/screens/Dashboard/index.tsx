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
        <Card />
        <Card />
        <Card />
      </CardContente>


    </Container>
  );
}