import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FISHES } from '../shared/fishes';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fishes: FISHES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render () {
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.catchphrase}
                    //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    leftAvatar={{ source: {uri: item.icon}}}
                />
            );
        };
    
        return (
            <FlatList
                data={this.state.fishes}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default Directory;