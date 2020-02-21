import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Tabscreen from "./screens/Tabs/Tabs";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>
        <Tabscreen/>
      </Container>
    );
  }
}