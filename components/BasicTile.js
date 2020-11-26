import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export class BasicTile extends Component {
    state = {
        clicks: 0
    }

    onClick = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render(props) {
        return(
        <Pressable style={styles.mainView} onPress={this.onClick}>
            <Text>{this.props.title}</Text>
            <Text>{this.props.subtitle}</Text>
            <Text>{this.props.description}</Text>
            <Text>{this.state.clicks} clicks</Text>
        </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})