import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
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
            <View>
                <ScrollView style={{backgroundColor: '#FFDAB9'}}>
                    <View>
                        <Tile
                            imageSrc={{uri: fish.image}}
                        />
                    
                    </View>

                    <Card
                        title= {fish.name}
                        wrapperStyle={{margin: 20}}>
                        
                        <Text style={styles.textLabel}>Region Availability (North/South): </Text>
                        <Text><Text style={styles.textLabel}>N: </Text>{fish.northavailability}</Text>
                        <Text><Text style={styles.textLabel}>S: </Text>{fish.southavailability}</Text>


                        <Text><Text style={styles.textLabel}>Time: </Text> {fish.time}</Text>
                        <Text><Text style={styles.textLabel}>Location: </Text> {fish.location}</Text>
                        <Text><Text style={styles.textLabel}>Rarity: </Text> {fish.rarity}</Text>
                        <Text><Text style={styles.textLabel}>Shadow: </Text> {fish.shadow}</Text>
                        <Text><Text style={styles.textLabel}>Price: </Text> {fish.price} bells</Text>
                        <Text><Text style={styles.textLabel}>CJ price: </Text> {fish.cjprice} bells</Text>

                        <Text style={styles.textLabel}>Your catchphrase: </Text>
                        <Text>{'\t'}{fish.catchphrase}</Text>

                        <Text style={styles.textLabel}>Blather's catchphrase: </Text>
                        <Text>{'\t'}{fish.museumphrase}</Text>

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
            </View>
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
    textLabel: {
        fontWeight: "bold"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FishInfo);