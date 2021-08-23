import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postFossilDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        fossils: state.fossils,
        fossilDonations: state.fossilDonations
    };
};

const mapDispatchToProps = {
    postFossilDonation: fossilId => (postFossilDonation(fossilId))
};


function RenderFossil(props) {

    const {fossil} = props;

    if (fossil) {
        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/acnh_ground_bg2.png'}}
                resizeMode="cover"
                blurRadius={1}
                style={styles.image}
            >
                <ScrollView>

                <View style={{margin: 5, flexDirection: 'row'}}>
                        <Animatable.View 
                            style={styles.imageContainer}
                            animation='bounceIn'
                            duration={3000}
                            delay={1000}
                        >
                            <Image 
                                style={{width: 150, height: 150}}
                                source={{uri: fossil.image}} 
                                />
                        </Animatable.View>

                        <Animatable.View 
                            style={{flex: 1, justifyContent: 'center'}}
                            animation='bounceInRight'
                            duration={3000}
                            delay={1000}
                        >
                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Price: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{fossil.price} bells</Text>
                                </View>
                            </View>
                        </Animatable.View>
                    </View>

                    <Animatable.View 
                        style={{flex: 1, justifyContent: 'center'}}
                        animation='bounceInUp'
                        duration={2000}
                        delay={1000}
                    >
                        <Card
                            title= {fossil.name}
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

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Part of: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{fossil.partof}</Text>
                                    </View>
                                </View>

                                <View style={styles.viewContainer}>
                                    <Text style={styles.viewLabelText}>Blathers' Description:</Text>
                                    
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{fossil.museumphrase}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{alignItems: 'center'}}>
                                <Icon
                                    name={props.fossilDonation ? 'check-circle-o' : 'circle-o'}
                                    type='font-awesome'
                                    color='#2E8B57'
                                    raised
                                    reverse
                                    size = {30}
                                    onPress={() => props.fossilDonation ? 
                                        console.log('Already set as a favorite') : props.markFossilDonation()}
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

class FossilInfo extends Component {

    markFossilDonation(fossilId) {
        this.props.postFossilDonation(fossilId);
    }

    static navigationOptions = {
        title: 'Fossil Information'
    }

    render() {
        const fossilId = this.props.navigation.getParam('fossilId');
        const fossil = this.props.fossils.fossils.filter(fossil => fossil.id === fossilId)[0];
        return <RenderFossil 
            fossil={fossil} 
            fossilDonation = {this.props.fossilDonations.includes(fossilId)}
            markFossilDonation = {()=>this.markFossilDonation(fossilId)}
            />;
    }
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        backgroundColor: '#FFEFD5', 
        flex: 1, 
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInfo: {
        fontFamily: 'Varela-Round',
        fontSize: 15,
        margin: 5
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FossilInfo);