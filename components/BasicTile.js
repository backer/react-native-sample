import { useRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../Constants';

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
            <View style={styles.imageColumn}>
                <Image
                    source={require('../images/thumbnail.png')}
                    style={styles.thumbnail} />
                <Text style={{
                    fontSize: 16,
                    fontWeight: this.state.clicks > 0 ? "bold" : "normal"
                    }}>{this.state.clicks} clicks</Text>
            </View>
            <View style={styles.textPanel} marginStart={10}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        backgroundColor: Colors.white
    },
    imageColumn: {
        flexDirection: 'column',
        margin: 10
    },
    textPanel: {
        flexDirection: 'column',
        top: 10,
        flexShrink: 1,
        paddingEnd: 10,
        paddingBottom: 10
    },
    thumbnail: {
        width: 160,
        height: 90
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        fontStyle: "italic"
    },
    description: {
        fontSize: 16,
        flexWrap: 'wrap'
    }
})

export default function(props) {
    const route = useRoute();
    return <BasicTile {...props} route={route} />
}