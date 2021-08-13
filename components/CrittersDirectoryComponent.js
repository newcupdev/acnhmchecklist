import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        bugs: state.bugs
    };
};

class CrittersDirectory extends Component {

    static navigationOptions = {
        title: 'Critters Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderCritterDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    onPress={() => navigate('BugInfo', { bugId: item.id })}
                    leftAvatar={{ source: {uri: item.icon}}}
                />
            );
        };

        if (this.props.bugs.isLoading) {
            return <Loading />;
        }
        if (this.props.bugs.errMess) {
            return (
                <View>
                    <Text>{this.props.bugs.errMess}</Text>
                </View>
            );
        }
    
        return (
            <FlatList
                data={this.props.bugs.bugs}
                renderItem={renderCritterDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default connect(mapStateToProps)(CrittersDirectory);