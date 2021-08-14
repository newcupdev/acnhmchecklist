import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        arts: state.arts
    };
};



function RenderArt({art}) {

    if (art) {
        return (
            
                <ScrollView style={{backgroundColor: '#FFDAB9'}}>

                    <View style={styles.imageContainer}>
                        <View style={{flex: 1}}>
                            <Image 
                                style={{width: 150, height: 150}}
                                source={{uri: art.image}} 
                                />
                        </View>
                        <View style={{flex: 2}}></View>
                        <View style={{flex: 3}}>
                            
                            <Text><Text style={styles.priceLabel}>Buy Price: </Text> {art.buyprice} bells</Text>
                            <Text><Text style={styles.priceLabel}>Sell price: </Text> {art.sellprice} bells</Text>
                            
                        </View>
                    </View>
                    <Card
                        title= {art.name}
                        wrapperStyle={{margin: 20}}
                        >


                        {/* <Text><Text style={styles.textLabel}>Art has a fake version: </Text> {art.hasFake} </Text> */}

                        <Text style={styles.textLabel}>Blather's art description: </Text>
                        <Text>{'\t'}{art.museumphrase}</Text>


                    </Card>
                </ScrollView>
            
        );
    }
    return <View />;
}

class ArtInfo extends Component {

    static navigationOptions = {
        title: 'Art Information'
    }

    render() {
        const artId = this.props.navigation.getParam('artId');
        const art = this.props.arts.arts.filter(art => art.id === artId)[0];
        return <RenderArt art={art} />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    },
    priceLabel: {
        fontWeight: "bold"
        
    },
    imageContainer: {
        margin: 40,
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps)(ArtInfo);