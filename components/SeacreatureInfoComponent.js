import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postSeaCreatureDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

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
            <ImageBackground
                source={{uri: baseUrl + 'images/acnh_water_bg2.jpg'}}
                resizeMode="cover"
                blurRadius={1}
                style={styles.image}
            >
                <ScrollView>
                    <Animatable.View
                        animation='wobble'
                        duration={5000}
                        delay={1000}
                    >
                        <Tile
                            imageSrc={{uri: seacreature.image}}
                            featured
                            imageProps={{
                                resizeMode: "contain"
                            }}
                        />
                    </Animatable.View>
                    
                    <Animatable.View
                        animation='bounceInUp'
                        duration={5000}
                        delay={1000}
                    >
                        <Card
                            title= {seacreature.name}
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
                                }}
                            >
                            
                            <View style={{margin: 5}}>
                                <View style={styles.viewContainer}>

                                    <Text style={styles.viewLabelText}>Region Availability:</Text>

                                    <View style={{flexDirection: 'row'}}>
                                        <View style={[styles.viewTextLabelContainer,{flex: 1}]}>
                                            <Text style={styles.viewLabelText}>North:</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textInfo}>{seacreature.northavailability}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row'}}>
                                        <View style={[styles.viewTextLabelContainer,{flex: 1}]}>
                                            <Text style={styles.viewLabelText}>South:</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textInfo}>{seacreature.southavailability}</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Time: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.time}</Text>
                                    </View>
                                </View>
                                
                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Speed: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.speed}</Text>
                                    </View>
                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Shadow:</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.shadow}</Text>
                                    </View>
                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Price: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.price} bells</Text>
                                    </View>
                                </View>

                                <View style={styles.viewContainer}>
                                    <Text style={styles.viewLabelText}>Your catchphrase:</Text>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.catchphrase}</Text>
                                    </View>
                                </View>

                                <View style={styles.viewContainer}>
                                    <Text style={styles.viewLabelText}>Blather's Catchphrase:</Text>
                                    
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{seacreature.museumphrase}</Text>
                                    </View>
                                </View>
                            </View>

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
                    </Animatable.View>
                </ScrollView>
            </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeacreatureInfo);