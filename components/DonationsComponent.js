import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
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
            <ImageBackground 
                source={{uri: baseUrl + 'images/leaf_icon_bg.png'}}
                resizeMode="cover"
                style={styles.image}
                >
                <ScrollView>
                <Card 
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9
                        }}
                        featuredTitle= 'BUGS'
                        image={{uri: baseUrl + 'images/bug_bg.jpg'}}
                        
                    >
                        <Text style={styles.text} onPress={() => navigate('BugDonations', null)}>
                        Click here to view donations
                        </Text>
                    </Card> 
                    <Card 
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9
                            }}
                        featuredTitle= 'FISH'
                        image={{uri: baseUrl + 'images/fishing_cj.png'}}
                    >
                        <Text style={styles.text} onPress={() => navigate('FishDonations', null)}>
                        Click here to view donations
                        </Text>
                    </Card> 
                    <Card 
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9
                        }}
                        featuredTitle= 'SEA CREATURES'
                        image={{uri: baseUrl + 'images/sea_creatures.jpg'}}
                    >
                        <Text style={styles.text} onPress={() => navigate('SCDonations', null)}>
                            Click here to view donations
                        </Text>
                    </Card> 
                    <Card 
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9
                        }}
                        featuredTitle= 'ARTS'
                        image={{uri: baseUrl + 'images/acnh_art.jpg'}}
                    >
                        <Text style={styles.text} onPress={() => navigate('ArtDonations', null)}>
                        Click here to view donations
                        </Text>
                    </Card> 
                    <Card 
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9,
                            marginBottom: 10
                        }}
                        featuredTitle= 'FOSSILS'
                        image={{uri: baseUrl + 'images/acnh_dino.png'}}
                    >
                        <Text style={styles.text} onPress={() => navigate('FossilDonations', null)}>
                        Click here to view donations
                        </Text>
                    </Card> 
                </ScrollView>
            </ImageBackground>
        );

        
    }
    
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
        margin: 10, 
        fontWeight: 'bold', 
        fontSize: 16, 
        textAlign: 'center'
    }
    
  });

export default Donations;

//export default connect(mapStateToProps)(Donations);