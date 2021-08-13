import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fishes: state.fishes
    };
};



function RenderFish({fish}) {

    if (fish) {
        return (
            <View>
                <ScrollView>
                    <Tile
                        imageSrc={{uri: fish.image}}
                    />

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

                        

                    </Card>
                </ScrollView>
            </View>
        );
    }
    return <View />;
}

class FishInfo extends Component {

    static navigationOptions = {
        title: 'Fish Information'
    }

    render() {
        const fishId = this.props.navigation.getParam('fishId');
        const fish = this.props.fishes.fishes.filter(fish => fish.id === fishId)[0];
        return <RenderFish fish={fish} />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    }
});

export default connect(mapStateToProps)(FishInfo);