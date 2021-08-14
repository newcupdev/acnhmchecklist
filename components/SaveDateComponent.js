import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class SaveDate extends Component {

    static navigationOptions = {
        title: 'Save the date!'
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#F4A460'}}>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/bugoff.jpg'}}
                    featured
                />
                <View style={styles.container}>
                
                    <Text 
                        onPress={()=>console.log("use a modal to show a form")}
                        style={{fontSize: 15, fontWeight: "bold"}}>
                            CLICK TO SAVE THE DATE!

                    </Text>
                </View>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/fishtourney.png'}}
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

export default SaveDate