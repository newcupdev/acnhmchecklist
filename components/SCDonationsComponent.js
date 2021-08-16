import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteSeaCreatureDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        seacreatures: state.seacreatures,
        seacreatureDonations: state.seacreatureDonations
    };
};

const mapDispatchToProps = {
    deleteSeaCreatureDonation: seacreatureId => deleteSeaCreatureDonation(seacreatureId)
};

class SCDonations extends Component {

    static navigationOptions = {
        title: 'My Sea Creature Donations'
    }

    render() {
        
        const renderSeaCreatureDonationItem = ({item}) => {
            return (
                <SwipeRow rightOpenValue={-100} style={styles.swipeRow}>
                    <View style={styles.deleteView}>
                        <TouchableOpacity
                            style={styles.deleteTouchable}
                            onPress={() => this.props.deleteSeaCreatureDonation(item.id)}
                        >
                        <Text style={styles.deleteText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ListItem
                            title={item.name}
                            subtitle={item.description}
                            leftAvatar={{source: {uri: item.icon}}}
                    
                        />
                    </View>
                </SwipeRow>
            );
        };

        if (this.props.seacreatures.isLoading) {
            return <Loading />;
        }
        if (this.props.seacreatures.errMess) {
            return (
                <View>
                    <Text>{this.props.seacreatures.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.seacreatures.seacreatures.filter(
                    seacreature => this.props.seacreatureDonations.includes(seacreature.id)
                )}
                renderItem={renderSeaCreatureDonationItem}
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

export default connect(mapStateToProps, mapDispatchToProps)(SCDonations);