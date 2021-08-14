import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Donations extends Component {

    static navigationOptions = {
        title: 'My Donations'
    }

    render() {
        return(
            <ScrollView style={{backgroundColor: '#FFDAB9'}}>
               <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'BUGS'
                    image={{uri: baseUrl + 'images/bug_bg.jpg'}}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'FISH'
                    image={{uri: baseUrl + 'images/fishing_cj.png'}}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'SEA CREATURES'
                    image={{uri: baseUrl + 'images/sea_creatures.jpg'}}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'ARTS'
                    image={{uri: baseUrl + 'images/acnh_art.jpg'}}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'FOSSILS'
                    image={{uri: baseUrl + 'images/acnh_dino.png'}}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
            </ScrollView>
        );
    }
    
}

export default Donations;