import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './components/Calculator.js';
import { Container, Header, Content, H1, H2, H3, Text, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>The Shartman Role</Title>
        </Body>
      </Header>
      <Calculator />
    </Container>
  );
}
