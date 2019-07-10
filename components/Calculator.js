import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, H1, H2, H3, Text, Button } from 'native-base';

const styles = {
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    button: {
        width: 75,
        height: 75
    }
};

class Calculator extends Component {

    render() {
        return (
            <Container style={styles.main}>
                <Container style={{height: '100%', backgroundColor: 'skyblue'}}>
                    <Content snapToAlignment='center'>
                        <Button block dark style={styles.button}>
                            <Text>Info</Text>
                        </Button>
                    </Content>
                </Container>
            </Container>
        );
    }
}

export default Calculator;