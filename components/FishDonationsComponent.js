import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Modal, ImageBackground } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteFishDonation } from '../redux/ActionCreators';
import * as Progress from 'react-native-progress';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        fishes: state.fishes,
        fishDonations: state.fishDonations
    };
};

const mapDispatchToProps = {
    deleteFishDonation: fishId => deleteFishDonation(fishId)
};

class FishDonations extends Component {

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
        title: 'My Fish Donations'
    }

    render() {
        
        const renderFishDonationItem = ({item}) => {
            
            return (
                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                    <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
                        <View style={styles.deleteView}>
                            <TouchableOpacity
                                style={styles.deleteTouchable}
                                onPress={() => this.props.deleteFishDonation(item.id)}
                            >
                            <Icon 
                                    name='trash-alt'
                                    type='font-awesome-5'
                                    color='#B0C4DE'
                                    size={27}
                                    solid
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ListItem
                                title={item.name}
                                titleStyle={{
                                    fontFamily: "Fink-Heavy",
                                    fontSize: 20
                                }}
                                leftAvatar={{source: {uri: item.icon}}}
                                contentContainerStyle={{
                                    alignItems: "center",
                                    marginRight: 35
                                }}
                                containerStyle={{
                                    backgroundColor: "#FFE4B5",
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    margin: 8,
                                    
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 5,
                                        height: 5
                                    },
                                    shadowOpacity: 0.75,
                                    shadowRadius: 5,
                                    elevation: 9
                                }}
                            />
                        </View>
                    </SwipeRow>
                </Animatable.View>
            );
        };

        if (this.props.fishes.isLoading) {
            return <Loading />;
        }
        if (this.props.fishes.errMess) {
            return (
                <View>
                    <Text>{this.props.fishes.errMess}</Text>
                </View>
            );
        }

        let counter = this.props.fishes.fishes.filter(
            fish => this.props.fishDonations.includes(fish.id)
        )
        console.log(counter.length / 80);
        let progress = parseFloat((counter.length / 80).toFixed(2));
        console.log(progress);
        
        
        

        return (
            <ImageBackground
                source={{uri: baseUrl + 'images/leaf_icon_bg.png'}}
                resizeMode="cover"
                style={styles.image}
                blurRadius={.75}
            >

                <View style={{margin: 10}} >
                    <Progress.Bar 
                        progress={progress} 
                        width = {null} 
                        height={25} 
                        color={'#FFDAB9'}
                        borderWidth={2}
                        animated  
                    />
                    <Text 
                        style={styles.progressText} 
                        onPress={() => this.toggleModal()}>
                            Click here to view your stat!
                    </Text>
                </View>

                <FlatList
                    data={this.props.fishes.fishes.filter(
                        fish => this.props.fishDonations.includes(fish.id)
                    )}
                    renderItem={renderFishDonationItem}
                    keyExtractor={item => item.id.toString()}
                />

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                    
                >
                    <View style={styles.modal}>

                        <View style={styles.modalView}>
                            <View>
                                <Text style={styles.modalTitle}>Percentage progress</Text>
                            </View>

                            <View style={styles.modalProgress}>
                                <Progress.Circle 
                                    size={200} 
                                    thickness={30} 
                                    progress={progress} 
                                    color={'#CD853F'}
                                    borderWidth={2}
                                    animate 
                                    showsText 
                                    formatText={() => {
                                        let progressText = ((progress * 100).toFixed(2)).toString();
                                        return `${progressText}%`;
                                    }}
                                    />

                                <Text style={styles.modalText}>Total number of fish: 80</Text>

                                <Text style={styles.modalText}>You have donated {counter.length} out of 80.</Text>
                            </View>
                            

                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    
                                }}
                                
                                title='Close'
                                titleStyle={{
                                    fontFamily: 'Fink-Heavy',
                                    color: '#000',
                                    fontSize: 18
                                }}
                                buttonStyle={{
                                    backgroundColor: '#FFEFD5',
                                    
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
    progressText: {
        fontFamily: 'Fink-Heavy',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10
    },
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: '#A52A2A',
        height: '70%',
        width: 70,
        justifyContent: 'center',
        margin: 8,
        borderRadius: 20
    },
    deleteText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 16,
        width: 100
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
    modalProgress: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFEFD5',
        borderRadius: 10,
        alignItems: 'center'
    },
    modalText: {
        fontSize: 18,
        margin: 4,
        fontFamily: 'Fink-Heavy',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(FishDonations);