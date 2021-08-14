import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fossils: state.fossils
    };
};

class FossilsDirectory extends Component {

    static navigationOptions = {
        title: 'Fossils Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderFossilDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    //subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    onPress={() => navigate('FossilInfo', { fossilId: item.id })}
                    leftAvatar={{ source: {uri: baseUrl + 'images/fossil_icon.png'}}}
                />
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
                data={this.props.fossils.fossils}
                renderItem={renderFossilDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default connect(mapStateToProps)(FossilsDirectory);