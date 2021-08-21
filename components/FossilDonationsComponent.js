import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Modal, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteFossilDonation } from '../redux/ActionCreators';
import * as Progress from 'react-native-progress';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fossils: state.fossils,
        fossilDonations: state.fossilDonations
    };
};

const mapDispatchToProps = {
    deleteFossilDonation: fossilId => deleteFossilDonation(fossilId)
};

class FossilDonations extends Component {

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
        title: 'My Fossil Donations'
    }

    render() {
        
        const renderFossilDonationItem = ({item}) => {
            return (
                <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
                    <View style={styles.deleteView}>
                        <TouchableOpacity
                            style={styles.deleteTouchable}
                            onPress={() => this.props.deleteFossilDonation(item.id)}
                        >
                        <Text style={styles.deleteText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ListItem
                            title={item.name}
                            subtitle={item.description}
                            leftAvatar={{ source: {uri: baseUrl + 'images/fossil2_icon.png'}}}
                    
                        />
                    </View>
                </SwipeRow>
            );
        };

        if (this.props.fossils.isLoading) {
            return <Loading />;
        }
        if (this.props.fossils.errMess) {
            return (
                <View>
                    <Text>{this.props.fossils.errMess}</Text>
                </View>
            );
        }

        let counter = this.props.fossils.fossils.filter(
            fossil => this.props.fossilDonations.includes(fossil.id)
        )
        console.log(counter.length / 80);
        let progress = parseFloat((counter.length / 80).toFixed(2));
        console.log(progress);
        

        return (
            <View>
                <View style={{margin: 10}} >
                    <Text onPress={() => this.toggleModal()}>Click here to view your stat!</Text>
                    <Progress.Bar progress={progress} width = {null} height={20} animated  />
                </View>
                <FlatList
                    data={this.props.fossils.fossils.filter(
                        fossil => this.props.fossilDonations.includes(fossil.id)
                    )}
                    renderItem={renderFossilDonationItem}
                    keyExtractor={item => item.id.toString()}
                    
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text>Percentage progress</Text>
                        <Progress.Circle 
                            size={300} 
                            thickness={30} 
                            progress={progress} 
                            animate 
                            showsText 
                            formatText={() => {
                                let progressText = ((progress * 100).toFixed(2)).toString();
                                return `${progressText}%`;
                            }}
                            />
                        <Text>Total number of bugs: 80</Text>
                        <Text>You have caught {counter.length} out of 80.</Text>
                        <Button
                            onPress={() => {
                                this.toggleModal();
                                
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    deleteView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    deleteTouchable: {
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center'
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
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FossilDonations);