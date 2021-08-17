import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteFossilDonation } from '../redux/ActionCreators';
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
                            leftAvatar={{ source: {uri: baseUrl + 'images/leaf_icon.png'}}}
                    
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
        return (
            <FlatList
                data={this.props.fossils.fossils.filter(
                    fossil => this.props.fossilDonations.includes(fossil.id)
                )}
                renderItem={renderFossilDonationItem}
                keyExtractor={item => item.id.toString()}
                
            />
            
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FossilDonations);