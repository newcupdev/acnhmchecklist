import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

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
            data={props.fishes}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;