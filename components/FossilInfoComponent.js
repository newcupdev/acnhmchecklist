import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fossils: state.fossils
    };
};



function RenderFossil({fossil}) {

    if (fossil) {
        return (
            
                <ScrollView style={{backgroundColor: '#FFDAB9'}}>

                    <View style={styles.imageContainer}>
                        <View style={{flex: 1}}>
                            <Image 
                                style={{width: 150, height: 150}}
                                source={{uri: fossil.image}} 
                                />
                        </View>
                        <View style={{flex: 2}}></View>
                        <View style={{flex: 3}}>
                            
                            <Text><Text style={styles.priceLabel}>Price: </Text> {fossil.price} bells</Text>
                            <Text><Text style={styles.priceLabel}>Part of: </Text> {fossil.partof}</Text>
                            
                        </View>
                    </View>
                    <Card
                        title= {fossil.name}
                        wrapperStyle={{margin: 20}}
                        >


                        

                        <Text style={styles.textLabel}>Blather's fossil description: </Text>
                        <Text>{'\t'}{fossil.museumphrase}</Text>


                    </Card>
                </ScrollView>
            
        );
    }
    return <View />;
}

class FossilInfo extends Component {

    static navigationOptions = {
        title: 'Fossil Information'
    }

    render() {
        const fossilId = this.props.navigation.getParam('fossilId');
        const fossil = this.props.fossils.fossils.filter(fossil => fossil.id === fossilId)[0];
        return <RenderFossil fossil={fossil} />;
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

export default connect(mapStateToProps)(FossilInfo);