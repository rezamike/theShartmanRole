import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Picker, PickerItem, TouchableOpacity } from 'react-native';

class Calculator extends Component {
    state = {
        dieCount1: '1',
        dieCount2: '',
        rollResult: 0,
        transparent: true
    }

    rollEm = () => {
        var diceType = Number(this.state.dieCount2);
        var count = Number(this.state.dieCount1);
        var tempArr = [];
        var temp;
        var result;

        this.setState({
            transparent: !this.state.transparent
        })

        switch (diceType) {
            case 4:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 6:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 8:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 10:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 12:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
            case 20:
                for (var i = 0; i < count; i++) {
                    temp = Math.floor((Math.random() * diceType) + 1);

                    tempArr.push(temp);
                }
                break;
        }

        getSum = (total, num) => {
            return total + num;
        }

        result = tempArr.reduce(getSum, 0);

        this.setState({
            rollResult: result
        })

        setTimeout(() => { this.setState({ transparent: true }) }, 100);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.resultScreen}>
                    <Text style={{ fontSize: 52, marginTop: '10%', fontWeight: 'bold', color: 'white' }}>{this.state.rollResult}</Text>
                </View>
                <View style={styles.input}>
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0, left: 0, padding: 5 }}>
                        <Picker
                            selectedValue={this.state.dieCount1}
                            style={{
                                height: '100%',
                                width: '25%'
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ dieCount1: itemValue })
                            }
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                        </Picker>
                        <Text
                            style={{
                                height: '100%',
                                width: '25%',
                                fontSize: 36,
                                position: 'relative',
                                top: 85,
                                left: 25
                            }}
                        >
                            d
                        </Text>
                        <Picker
                            selectedValue={this.state.dieCount2}
                            style={{
                                height: '100%',
                                width: '50%'
                            }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ dieCount2: itemValue })
                            }
                        >
                            <Picker.Item label="--" value="-" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '30%' }}>
                    <View style={{ marginBottom: 50 }}>
                        <Text style={{ fontSize: 32, fontStyle: 'italic', fontWeight: 'bold' }}>
                            {this.state.dieCount1}<Text style={{ color: 'red' }}>d</Text>{this.state.dieCount2}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={this.state.transparent ? styles.button : styles.buttonClick} onPress={this.rollEm}>
                            <Text style={styles.buttonText}>Roll it, brah!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '75%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%'
    },
    button: {
        width: 250,
        height: 75,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'transparent'
    },
    buttonClick: {
        width: 250,
        height: 75,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'transparent',
        backgroundColor: 'black'
    },
    buttonText: {
        fontSize: 32,
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
        color: 'red',
        padding: 10
    }
});

export default Calculator;