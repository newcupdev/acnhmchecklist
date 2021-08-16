import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fishes: state.fishes,
        fishDonations: state.fishDonations
    };
};



class Donations extends Component {

    static navigationOptions = {
        title: 'My Donations'
    }

    render() {
        const { navigate } = this.props.navigation;

        // let counter = this.props.fishes.fishes.filter(
        //     fish => this.props.fishDonations.includes(fish.id)
        // )
        // console.log(counter)

        return(
            <ScrollView style={{backgroundColor: '#FFDAB9'}}>
               <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'BUGS'
                    image={{uri: baseUrl + 'images/bug_bg.jpg'}}
                    
                >
                    <Text style={{margin: 10}} onPress={() => navigate('BugDonations', null)}>
                        Percentage completion: 50% 
                    </Text>
                </Card> 
                <Card containerStyle={{backgroundColor: '#FFE4B5'}}
                    featuredTitle= 'FISH'
                    image={{uri: baseUrl + 'images/fishing_cj.png'}}
                >
                    <Text style={{margin: 10}} onPress={() => navigate('FishDonations', null)}>
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

//export default connect(mapStateToProps)(Donations);