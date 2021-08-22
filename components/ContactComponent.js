import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Tile, Button, Icon } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import * as MailComposer from 'expo-mail-composer';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['museum@acnhtracker.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/leaf_icon_bg.png'}}
                resizeMode="cover"
                style={styles.image}
            >
                <ScrollView>
                    <View style={{margin: 5}}>
                        <View style={{margin: 5, backgroundColor: '#F4A460', borderRadius: 20}}>
                            <Animatable.View
                                animation='fadeInUpBig'
                                duration={2000}
                                delay={1000}
                            >
                                <View style={{flex:1, margin: 20, overflow: 'hidden', borderRadius: 20}}>
                                    <Tile
                                        imageSrc={{uri: baseUrl + 'images/isabelle_contact.png'}}
                                        featured
                                        imageProps={{resizeMode: 'cover'}}
                                        containerStyle={{
                                            borderRadius: 20,
                                            overflow: 'hidden'
                                        }}
                                    />
                                </View>
                            </Animatable.View>
                            
                            <Animatable.View
                                animation='fadeInDownBig'
                                duration={2000}
                                delay={1000}
                            >
                                <View style={{flex:1, marginBottom: 20, marginTop: -10}}>
                                    <Card
                                        title="Do you have any feedback?"
                                        titleStyle={{
                                            fontFamily: 'Fink-Heavy',
                                            fontWeight: 'normal',
                                            fontSize: 25
                                        }}
                                        containerStyle={{
                                            backgroundColor: '#FFE4B5', 
                                            margin: 20,
                                            borderRadius: 20,
                                            overflow: 'hidden',
                                        }}
                                        >

                                        <View style={styles.viewContainer}>
                                            <Text style={styles.viewLabelText}>
                                                Please click the email icon below to email us for any issues like:
                                            </Text>
                                            
                                            <View style={styles.textContainer}>
                                                <Text style={styles.textInfo}>Misinformation</Text>
                                                <Text style={styles.textInfo}>Application Error</Text>
                                                <Text style={styles.textInfo}>Server Issues</Text>
                                            </View>
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Button
                                                title="Send Email"
                                                titleStyle={{
                                                    fontFamily: 'Fink-Heavy',
                                                    fontSize: 25,
                                                    justifyContent: 'center'
                                                }}
                                                buttonStyle={{backgroundColor: '#8B4513', margin: 20, padding: 10, borderRadius: 20}}
                                                icon={<Icon
                                                    name='envelope-open-text'
                                                    type='font-awesome-5'
                                                    color='#fff'
                                                    size={30}
                                                    iconStyle={{marginRight: 10, justifyContent:'center'}}
                                                />}
                                                onPress={() => this.sendMail()}
                                            />
                                        </View>
                                    </Card>
                                </View>
                            </Animatable.View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
    viewLabelText: {
        fontFamily: 'Fink-Heavy',
        fontSize: 18,
        margin: 5
    },
    viewContainer: {
        backgroundColor: '#DEB887', 
        margin: 3,
        padding: 10, 
        borderRadius: 10, 
        overflow: 'hidden'
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

export default Contact;