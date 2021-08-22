import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';



class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    toggleModal() {
        console.log('modal was clicked');
        this.setState({showModal: !this.state.showModal});
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/acnh_blathers_bg2.png'}}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.viewContainer}>
                        <Text style={styles.viewLabelText}>Animal Crossing: New Horizon - Museum Tracker</Text>
                                
                        <View style={styles.textContainer}>
                            <Text style={styles.textInfo}>Let's help Blathers complete the musuem exhibits.</Text>
                            <Text style={styles.textInfo}>Track all your donations:</Text>
                            <Text style={styles.textInfo}>{'\t'} - 80 Bugs</Text>
                            <Text style={styles.textInfo}>{'\t'} - 80 Fish</Text>
                            <Text style={styles.textInfo}>{'\t'} - 40 Sea Creatures</Text>
                            <Text style={styles.textInfo}>{'\t'} - 43 Art</Text>
                            <Text style={styles.textInfo}>{'\t'} - 73 Fossils</Text>
                            <Text style={styles.textInfo}>Track item as donated from the directory and check your progress.</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                
                                title='Copyright'
                                titleStyle={{
                                    fontFamily: 'Varela-Round'
                                }}
                                buttonStyle={{
                                    borderRadius: 20,
                                    backgroundColor: '#F4A460',
                                    margin: 5,
                                    width: 100
                                }}
                                accessibilityLabel='Tap me to save the date'
            
                                onPress={() => this.toggleModal() }
                            />
                        </View>

                    </View>
                </View>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                    
                >
                    <View style={styles.modal}>

                        <View style={styles.modalView}>
                            <View>
                                <Text style={styles.modalTitle}>Copyrights 2021</Text>
                            </View>

                            <View style={styles.modalBody}>

                                <Text style={styles.modalText}>
                                    All information, icons, and images about the bugs, fish, sea creatures, art, and fossils are 
                                    provided from the Animal Crossing: New Horizon API (http://acnhapi.com/doc). I don't own the
                                    images used for this mobile application, that was not included from the API. I used the data 
                                    to create my own json file, so I can access this information and use it on this mobile app. 
                                    Since there were some manually coded data, there might be a typo or misinformation. If you 
                                    notice any of these, please check our Contact screen and send us an e-mail feedback to correct 
                                    the errors. 
                                </Text>

                                <Text style={styles.modalText}>
                                    While a publish of this project is possible, please note that this mobile application is (for now) 
                                    for project purposes only for my Nucamp - Front-End Bootcamp Portfolio project. 
                                </Text>

                                <Text style={styles.modalText}>
                                    Angelo N. - Developer
                                </Text>
                            </View>
                            

                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    
                                }}
                                
                                title='Close'
                                titleStyle={{
                                    fontFamily: 'Fink-Heavy',
                                    color: '#fff',
                                    fontSize: 18
                                }}
                                buttonStyle={{
                                    backgroundColor: '#8B4513',
                                    
                                    borderRadius: 10
                                }}
                                
                            />
                           
                        </View>
                    </View>

                </Modal>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        justifyContent: "center"
    },
    viewContainer: {
        margin: 50,
        padding: 20, 
        backgroundColor: 'rgba(255,248,220,0.75)', 
        //position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center',
        // width: 350,
        //height: 450,
        borderRadius: 20,
        padding: 10
        
    },
    viewLabelText: {
        fontFamily: 'Fink-Heavy',
        fontSize: 23,
        margin: 5
    },
    textContainer: {
        backgroundColor: 'rgba(255,239,213,0.5)', 
        flex: 3, 
        margin: 10,
        borderRadius: 7,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    textInfo: {
        fontFamily: 'Varela-Round',
        fontSize: 15,
        margin: 5
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: -30,
    },
    modal: { 
        justifyContent: 'center',
        margin: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#D2B48C',
        padding: 30,
        borderRadius: 20
    },
    modalTitle: {
        fontSize: 24,
        backgroundColor: '#FFEFD5',
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Fink-Heavy',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    modalBody: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFEFD5',
        borderRadius: 10,
        alignItems: 'center'
    },
    modalText: {
        fontSize: 12,
        margin: 4,
        fontFamily: 'Varela-Round',
        textAlign: 'center'
    }
});

export default About;