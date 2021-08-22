import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postArtDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        arts: state.arts,
        artDonations: state.artDonations
    };
};

const mapDispatchToProps = {
    postArtDonation: artId => (postArtDonation(artId))
};



function RenderArt(props) {

    const {art} = props;

    if (art) {

        let artWarning = (art.hasFake) ? 'Yes! Redd sells a fake copy of this art!' : 'No, there are no fake copies of this art.';                           

        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/leaf_bg2.png'}}
                resizeMode="cover"
                blurRadius={1}
                style={styles.image}
            >
                <ScrollView>

                    <View style={{margin: 5, flexDirection: 'row'}}>
                        <View style={styles.imageContainer}>
                            <Image 
                                style={{width: 150, height: 150}}
                                source={{uri: art.image}} 
                                />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Buy Price: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{art.buyprice} bells</Text>
                                </View>
                            </View>
                            <View style={[styles.viewContainer, {flexDirection: 'row'}]}>
                                <View style={styles.viewTextLabelContainer}>
                                    <Text style={styles.viewLabelText}>Sell Price: </Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{art.sellprice} bells</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <Card
                        title= {art.name}
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
                                <Text style={styles.viewLabelText}>Does it have any fake copies?</Text>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{artWarning}</Text>
                                </View>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.viewLabelText}>Blather's Description:</Text>
                                
                                <View style={styles.textContainer}>
                                    <Text style={styles.textInfo}>{art.museumphrase}</Text>
                                </View>
                            </View>

                        </View>

                        
                        {/* <Text>{artWarning}</Text>
                        <Text style={styles.textLabel}>Blather's art description: </Text>
                        <Text>{'\t'}{art.museumphrase}</Text> */}

                        <View style={{alignItems: 'center'}}>
                            <Icon
                                name={props.artDonation ? 'check-circle-o' : 'circle-o'}
                                type='font-awesome'
                                color='#2E8B57'
                                raised
                                reverse
                                size = {30}
                                onPress={() => props.artDonation ? 
                                    console.log('Already set as a favorite') : props.markArtDonation()}
                            />
                        </View>


                    </Card>
                </ScrollView>
            </ImageBackground>
        );
    }
    return <View />;
}

class ArtInfo extends Component {

    markArtDonation(artId) {
        this.props.postArtDonation(artId);
    }

    static navigationOptions = {
        title: 'Art Information'
    }

    render() {
        const artId = this.props.navigation.getParam('artId');
        const art = this.props.arts.arts.filter(art => art.id === artId)[0];
        return <RenderArt 
            art={art} 
            artDonation = {this.props.artDonations.includes(artId)}
            markArtDonation = {()=>this.markArtDonation(artId)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtInfo);