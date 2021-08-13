import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fishes: state.fishes
    };
};

class FishesDirectory extends Component {

    static navigationOptions = {
        title: 'Fish Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderFishDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    onPress={() => navigate('FishInfo', { fishId: item.id })}
                    leftAvatar={{ source: {uri: item.icon}}}
                />
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
    
        return (
            <FlatList
                data={this.props.fishes.fishes}
                renderItem={renderFishDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default connect(mapStateToProps)(FishesDirectory);