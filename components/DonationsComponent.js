import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable'

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
                    <Animatable.View
                        animation='bounceInLeft'
                        duration={2000}
                        delay={1000}
                    >
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
                                shadowOpacity: 0.75,
                                shadowRadius: 5,
                                elevation: 9
                            }}
                            featuredTitle= 'BUGS'
                            featuredTitleStyle={{
                                fontFamily: "Fink-Heavy", 
                                fontWeight: "normal", 
                                fontSize: 40,
                                color: "#FFEBCD",
                                textShadowColor: "rgba(0,0,0,0.75)",
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 10 
                                
                            }}
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
                            featuredTitleStyle={{
                                fontFamily: "Fink-Heavy", 
                                fontWeight: "normal", 
                                fontSize: 40,
                                color: "#FFEBCD",
                                textShadowColor: "rgba(0,0,0,0.75)",
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 10 
                                
                            }}
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
                            featuredTitleStyle={{
                                fontFamily: "Fink-Heavy", 
                                fontWeight: "normal", 
                                fontSize: 40,
                                color: "#FFEBCD",
                                textShadowColor: "rgba(0,0,0,0.75)",
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 10 
                                
                            }}
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
                            featuredTitleStyle={{
                                fontFamily: "Fink-Heavy", 
                                fontWeight: "normal", 
                                fontSize: 40,
                                color: "#FFEBCD",
                                textShadowColor: "rgba(0,0,0,0.75)",
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 10 
                                
                            }}
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
                            featuredTitleStyle={{
                                fontFamily: "Fink-Heavy", 
                                fontWeight: "normal", 
                                fontSize: 40,
                                color: "#FFEBCD",
                                textShadowColor: "rgba(0,0,0,0.75)",
                                textShadowOffset: {width: 3, height: 3},
                                textShadowRadius: 10 
                                
                            }}
                            image={{uri: baseUrl + 'images/acnh_dino.png'}}
                        >
                            <Text style={styles.text} onPress={() => navigate('FossilDonations', null)}>
                            Click here to view donations
                            </Text>
                        </Card> 
                    </Animatable.View>
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
        fontSize: 20, 
        textAlign: 'center',
        fontFamily: "Fink-Heavy",
    }
    
  });

export default Donations;

//export default connect(mapStateToProps)(Donations);