import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BUGS } from '../shared/bugs';

class CrittersDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bugs: BUGS
        };
    }

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
    
        return (
            <FlatList
                data={this.state.bugs}
                renderItem={renderCritterDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

    
}

export default CrittersDirectory;