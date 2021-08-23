import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable'

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ImageBackground 
                source={{uri: baseUrl + 'images/acnhbg.png'}}
                resizeMode="cover"
                style={styles.image}
                >
                <Animatable.View 
                    style={styles.viewContainer}
                    animation='bounceIn'
                    duration={2000}
                    delay={1000}
                >
                    <Text style={styles.subText}>Musuem</Text>
                    <Text style={styles.subText}>Tracker</Text>
                </Animatable.View>
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
        // fontWeight: "bold",
        fontSize: 17,
        fontFamily: "Fink-Heavy"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    viewContainer: {
        margin: 50,
        padding: 20, 
        backgroundColor: '#D2B48C',  
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10
        
    },
    subText: {
        fontFamily: 'Fink-Heavy',
        fontSize: 45,
        margin: 1,
        color: '#000',
        textShadowColor: "#fff",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 10,
        
    }
});

export default Home