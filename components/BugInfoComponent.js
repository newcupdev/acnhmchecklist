import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postBugDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        bugs: state.bugs,
        bugDonations: state.bugDonations
    };
};

const mapDispatchToProps = {
    postBugDonation: bugId => (postBugDonation(bugId))
};



function RenderBug(props) {

    const {bug} = props;

    if (bug) {
        return (
            <ImageBackground 
                source={{uri: baseUrl + 'images/acnh_grass_bg.jpg'}}
                resizeMode="cover"
                blurRadius={1}
                style={styles.image}
                >
                <ScrollView>
                    <Animatable.View
                        animation='tada'
                        duration={5000}
                        delay={1000}
                    >
                        <Tile
                            imageSrc={{uri: bug.image}}
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
                            title= {bug.name}
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
                                            <Text style={styles.textInfo}>{bug.northavailability}</Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection: 'row'}}>
                                        <View style={[styles.viewTextLabelContainer,{flex: 1}]}>
                                            <Text style={styles.viewLabelText}>South:</Text>
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.textInfo}>{bug.southavailability}</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Time: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.time}</Text>
                                    </View>
                                </View>
                                
                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Location: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.location}</Text>
                                    </View>
                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Rarity:</Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.rarity}</Text>
                                    </View>
                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Price: </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.price} bells</Text>
                                    </View>
                                </View>

                                <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                    <View style={styles.viewTextLabelContainer}>
                                        <Text style={styles.viewLabelText}>Price (Flick): </Text>
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.flickprice} bells</Text>
                                    </View>
                                </View>

                                <View style={styles.viewContainer}>
                                    <Text style={styles.viewLabelText}>Your catchphrase:</Text>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.catchphrase}</Text>
                                    </View>
                                </View>

                                <View style={styles.viewContainer}>
                                    <Text style={styles.viewLabelText}>Blathers' Catchphrase:</Text>
                                    
                                    <View style={styles.textContainer}>
                                        <Text style={styles.textInfo}>{bug.museumphrase}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{alignItems: 'center'}}>
                                <Icon
                                    name={props.bugDonation ? 'check-circle-o' : 'circle-o'}
                                    type='font-awesome'
                                    color='#2E8B57'
                                    raised
                                    reverse
                                    size = {30}
                                    onPress={() => props.bugDonation ? 
                                        console.log('Already set as a favorite') : props.markBugDonation()}
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

class BugInfo extends Component {


    markBugDonation(bugId) {
        this.props.postBugDonation(bugId);
    }


    static navigationOptions = {
        title: 'Bug Information'
    }

    render() {
        const bugId = this.props.navigation.getParam('bugId');
        const bug = this.props.bugs.bugs.filter(bug => bug.id === bugId)[0];
        return <RenderBug 
            bug={bug} 
            bugDonation = {this.props.bugDonations.includes(bugId)}
            markBugDonation = {()=>this.markBugDonation(bugId)}
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

export default connect(mapStateToProps, mapDispatchToProps)(BugInfo);