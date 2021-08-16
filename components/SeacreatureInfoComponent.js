import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postSeaCreatureDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        seacreatures: state.seacreatures,
        seacreatureDonations: state.seacreatureDonations
    };
};

const mapDispatchToProps = {
    postSeaCreatureDonation: seacreatureId => (postSeaCreatureDonation(seacreatureId))
};



function RenderSeacreature(props) {

    const {seacreature} = props;

    if (seacreature) {
        return (
            <View>
                <ScrollView style={{backgroundColor: '#FFDAB9'}}>
                    <Tile
                        imageSrc={{uri: seacreature.image}}
                    />

                    <Card
                        title= {seacreature.name}
                        wrapperStyle={{margin: 20}}>
                        
                        <Text style={styles.textLabel}>Region Availability (North/South): </Text>
                        <Text><Text style={styles.textLabel}>N: </Text>{seacreature.northavailability}</Text>
                        <Text><Text style={styles.textLabel}>S: </Text>{seacreature.southavailability}</Text>


                        <Text><Text style={styles.textLabel}>Time: </Text> {seacreature.time}</Text>
                        <Text><Text style={styles.textLabel}>Speed: </Text> {seacreature.speed}</Text>
                        <Text><Text style={styles.textLabel}>Shadow: </Text> {seacreature.shadow}</Text>
                        <Text><Text style={styles.textLabel}>Price: </Text> {seacreature.price} bells</Text>

                        <Text style={styles.textLabel}>Your catchphrase: </Text>
                        <Text>{'\t'}{seacreature.catchphrase}</Text>

                        <Text style={styles.textLabel}>Blather's catchphrase: </Text>
                        <Text>{'\t'}{seacreature.museumphrase}</Text>

                        <View style={{alignItems: 'center'}}>
                            <Icon
                                name={props.seacreatureDonation ? 'check-circle-o' : 'circle-o'}
                                type='font-awesome'
                                color='#2E8B57'
                                raised
                                reverse
                                size = {30}
                                onPress={() => props.seacreatureDonation ? 
                                    console.log('Already set as a favorite') : props.markSeaCreatureDonation()}
                            />
                        </View>

                        

                    </Card>
                </ScrollView>
            </View>
        );
    }
    return <View />;
}

class SeacreatureInfo extends Component {

    markSeaCreatureDonation(seacreatureId) {
        this.props.postSeaCreatureDonation(seacreatureId);
    }


    static navigationOptions = {
        title: 'Sea Creature Information'
    }

    render() {
        const seacreatureId = this.props.navigation.getParam('seacreatureId');
        const seacreature = this.props.seacreatures.seacreatures.filter(seacreature => seacreature.id === seacreatureId)[0];
        return <RenderSeacreature 
                seacreature={seacreature} 
                seacreatureDonation = {this.props.seacreatureDonations.includes(seacreatureId)}
                markSeaCreatureDonation = {()=>this.markSeaCreatureDonation(seacreatureId)}
                />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeacreatureInfo);