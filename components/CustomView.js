import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class CustomView extends Component {
    state = {
        count1: 0,
        count2: 0
    }

    count1Click = () => {
        this.setState({
            count1: this.state.count1 + 1
        })
    }

    count2Click = () => {
        this.setState({
            count2: this.state.count2 + 1
        })
    }

    reset = () => {
        console.log('resetting counts');
        this.setState({
            count1: 0,
            count2: 0
        })
    }

    goToTile = () => {
        this.props.navigation.navigate('Tile', {
            title: 'Xion First Clear',
            subtitle: 'Critical Mode One Hit',
            description: 'VoD of my first clear of the Xion data battle on critical mode. Only got hit once!'
        });
    }

    render() {
        return (
        <View style={styles.mainView}>
            <Button 
                title='Button 1'
                onPress={this.count1Click}/>
            <Text>Button 1 has been clicked {this.state.count1} times</Text>
            <Button 
                title='Button 2'
                onPress={this.count2Click}/>
            <Text>Button 2 has been clicked {this.state.count2} times</Text>
            <Button 
                title='reset'
                color='#FF0000'
                style={styles.resetButton}
                onPress={this.reset}/>
            <Button
                title='Go to Tile'
                color='#00FF00'
                onPress={this.goToTile} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
        mainView: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        resetButton: {
            alignSelf: 'baseline',
            top: 10,
            bottom: 10,
            marginTop: 20,
        }
})