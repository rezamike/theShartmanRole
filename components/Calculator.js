import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';

class Calculator extends Component {

    render() {
        return (
            <Container>
                <Content style={{ flex: 1, width: '100%'}}>
                    <H1>Header One</H1>
                    <H2>Header Two</H2>
                    <H3>Header Three</H3>
                    <Text>Default</Text>
                </Content>
            </Container>
        );
    }
}

export default Calculator;