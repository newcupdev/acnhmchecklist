import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFishDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fishes: state.fishes,
        fishDonations: state.fishDonations
    };
};

const mapDispatchToProps = {
    postFishDonation: fishId => (postFishDonation(fishId))
};

function RenderFish(props) {

    const {fish} = props;

    if (fish) {
        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/acnh_water_bg2.jpg'}}
                resizeMode="cover"
                blurRadius={1}
                style={styles.image}
                >
                <ScrollView>
                    <View>
                        <Tile
                            imageSrc={{uri: fish.image}}
                            imageProps={{
                                resizeMode: "contain"
                            }}
                        />
                    
                    </View>

                    <Card
                        title= {fish.name}
                        titleStyle={{
                            fontFamily: 'Fink-Heavy',
                            fontWeight: 'normal',
                            fontSize: 25
                        }}
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            margin: 10,
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
                        }}>
                        
                        <View style={{margin: 5}}>

                            <View style={styles.viewContainer}>

                                <Text style={styles.viewLabelText}>Region Availability:</Text>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={[styles.viewTextLabelContainer,{flex: 1}]}>
                                        <Text style={styles.viewLabelText}>North:</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{fish.northavailability}</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={[styles.viewTextLabelContainer,{flex: 1}]}>
                                        <Text style={styles.viewLabelText}>South:</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{fish.southavailability}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Time: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.time}</Text>
                                </View>
                            </View>
                            
                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Location: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.location}</Text>
                                </View>
                            </View>

                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Rarity:</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.rarity}</Text>
                                </View>
                            </View>

                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Shadow:</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.shadow}</Text>
                                </View>
                            </View>

                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Price: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.price} bells</Text>
                                </View>
                            </View>

                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Price (CJ): </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.cjprice} bells</Text>
                                </View>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.viewLabelText}>Your catchphrase:</Text>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.catchphrase}</Text>
                                </View>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.viewLabelText}>Blather's Catchphrase:</Text>
                                
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fish.museumphrase}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Icon
                                name={props.fishDonation ? 'check-circle-o' : 'circle-o'}
                                type='font-awesome'
                                color='#2E8B57'
                                raised
                                reverse
                                size = {30}
                                onPress={() => props.fishDonation ? 
                                    console.log('Already set as a favorite') : props.markFishDonation()}
                            />
                        </View>
            
                    </Card>
                </ScrollView>
            </ImageBackground>
        );
    }
    return <View />;
}

class FishInfo extends Component {

    markFishDonation(fishId) {
        this.props.postFishDonation(fishId);
    }

    static navigationOptions = {
        title: 'Fish Information'
    }

    render() {
        const fishId = this.props.navigation.getParam('fishId');
        const fish = this.props.fishes.fishes.filter(fish => fish.id === fishId)[0];
        return <RenderFish 
                fish={fish} 
                fishDonation = {this.props.fishDonations.includes(fishId)}
                markFishDonation = {()=>this.markFishDonation(fishId)}
                />;
    }
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
    viewContainer: {
        backgroundColor: '#F4A460', 
        margin: 3,
        padding: 10, 
        borderRadius: 10, 
        overflow: 'hidden'
    },
    viewLabelText: {
        fontFamily: 'Fink-Heavy',
        fontSize: 18,
        margin: 5
    },
    viewTextLabelContainer: {
        backgroundColor: '#FFDAB9', 
        flex: 2, 
        margin: 5,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        backgroundColor: '#FFEFD5', 
        flex: 3, 
        margin: 5,
        borderRadius: 7,
        alignItems: 'center'
    },
    textInfo: {
        fontFamily: 'Varela-Round',
        fontSize: 15,
        margin: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FishInfo);