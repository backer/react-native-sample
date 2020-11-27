import { useRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class BasicTile extends Component {
    state = {
        clicks: 0
    }

    onClick = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {
        route = this.props.route;

        title = this.props.title || route.params.title;
        subtitle = this.props.subtitle || route.params.subtitle;
        description = this.props.description || route.params.description;
        return(
        <Pressable style={styles.mainView} onPress={this.onClick}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Text>{description}</Text>
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

export default function(props) {
    const route = useRoute();
    return <BasicTile {...props} route={route} />
}