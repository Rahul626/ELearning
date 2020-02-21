

import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Popular from "./Popular/Popular";
import Topbook from "./Top/Top";
import NewBook from "./New/New";
export default class Tabscreen extends Component {
  render() {
    return (
      <Container>
   
        <Tabs transparent >
          <Tab heading={ <TabHeading><Text>Popular</Text></TabHeading>}>
            <Popular />
          </Tab>
          <Tab heading={ <TabHeading><Text>Topbook</Text></TabHeading>}>
            <Topbook />
          </Tab>
          <Tab heading={ <TabHeading><Text>NewBook</Text></TabHeading>}>
            <NewBook />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}