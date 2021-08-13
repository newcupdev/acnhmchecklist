import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        seacreatures: state.seacreatures
    };
};

class SeacreaturesDirectory extends Component {

    static navigationOptions = {
        title: 'Seacreatures Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderSeacreatureDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    //onPress={() => navigate('BugInfo', { bugId: item.id })}
                    leftAvatar={{ source: {uri: item.icon}}}
                />
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
                data={this.props.seacreatures.seacreatures}
                renderItem={renderSeacreatureDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default connect(mapStateToProps)(SeacreaturesDirectory);