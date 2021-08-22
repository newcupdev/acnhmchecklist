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
            <View>
                <FlatList
                    data={this.state.fishes}
                    renderItem={renderDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />


<View style={{margin: 10}}>
                        <View style={{backgroundColor: 'lightgray', flex: 1, alignItems: 'center'}}>
                            <Text>{bug.name}</Text>
                        </View>
                        <View style={{backgroundColor: 'gray', flex: 1}}>
                            <Text>Region Availability:</Text>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: 'green', flex: 1}}>
                                    <Text>North</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3}}>
                                    <Text>North Desc</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: 'green', flex: 1}}>
                                    <Text>South</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3}}>
                                    <Text>South Desc</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Location</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 3}}>
                                <Text>Location Desc</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Rarity</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 3}}>
                                <Text>Rarity Desc</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Price</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 3}}>
                                <Text>Price Desc</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Flick Price</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 3}}>
                                <Text>Flick Price Desc</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Catchphrase</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 2}}>
                                <Text>Your catchphrase</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{backgroundColor: 'green', flex: 1}}>
                                <Text>Blathers Catchphrase</Text>
                            </View>
                            <View style={{backgroundColor: 'blue', flex: 3}}>
                                <Text>Blatherss catchphrase</Text>
                            </View>
                        </View>
                    </View>



            </View>
        );
    }

    
}

export default Directory;