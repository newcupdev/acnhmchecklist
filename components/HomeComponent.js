import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#F4A460'}}>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/animal_crossing_bg.jpeg'}}
                    featured
                />
                <View style={styles.container}>
                    <Text style={styles.textLabel}>Animal Crossing New Horizon</Text>
                    <Text style={styles.textLabel}>Museum Tracker</Text>
                </View>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/acnh_museum_up.jpg'}}
                    featured
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: 17
    }
});

export default Home