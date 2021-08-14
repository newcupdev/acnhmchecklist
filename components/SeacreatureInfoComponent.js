import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        seacreatures: state.seacreatures
    };
};



function RenderSeacreature({seacreature}) {

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

                        

                    </Card>
                </ScrollView>
            </View>
        );
    }
    return <View />;
}

class SeacreatureInfo extends Component {

    static navigationOptions = {
        title: 'Sea Creature Information'
    }

    render() {
        const seacreatureId = this.props.navigation.getParam('seacreatureId');
        const seacreature = this.props.seacreatures.seacreatures.filter(seacreature => seacreature.id === seacreatureId)[0];
        return <RenderSeacreature seacreature={seacreature} />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    }
});

export default connect(mapStateToProps)(SeacreatureInfo);