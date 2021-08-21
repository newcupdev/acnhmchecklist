import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ImageBackground 
                source={{uri: baseUrl + 'images/leaf_icon_bg.png'}}
                resizeMode="cover"
                style={styles.image}
                >
                <ScrollView>
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
            </ImageBackground>
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
    },
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default Home