import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        arts: state.arts
    };
};

class ArtsDirectory extends Component {

    static navigationOptions = {
        title: 'Arts Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderArtDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    //subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    //onPress={() => navigate('BugInfo', { bugId: item.id })}
                    leftAvatar={{ source: {uri: baseUrl + 'images/leaf_icon.png'}}}
                />
            );
        };

        if (this.props.arts.isLoading) {
            return <Loading />;
        }
        if (this.props.arts.errMess) {
            return (
                <View>
                    <Text>{this.props.arts.errMess}</Text>
                </View>
            );
        }
    
        return (
            <FlatList
                data={this.props.arts.arts}
                renderItem={renderArtDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default connect(mapStateToProps)(ArtsDirectory);