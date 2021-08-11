import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Donations extends Component {

    static navigationOptions = {
        title: 'My Donations'
    }

    render() {
        return(
            <ScrollView>
               <Card 
                    featuredTitle= 'BUGS'
                    image={require('./images/react-lake.jpg')}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card 
                    featuredTitle= 'FISH'
                    image={require('./images/react-lake.jpg')}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card 
                    featuredTitle= 'SEA CREATURES'
                    image={require('./images/react-lake.jpg')}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card 
                    featuredTitle= 'ARTS'
                    image={require('./images/react-lake.jpg')}
                >
                    <Text style={{margin: 10}}>
                        Percentage completion: 50%
                    </Text>
                </Card> 
                <Card 
                    featuredTitle= 'FOSSILS'
                    image={require('./images/react-lake.jpg')}
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