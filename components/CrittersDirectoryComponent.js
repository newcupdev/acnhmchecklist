import React, {Component} from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import Directory from './DirectoryComponent';
import BugsDirectory from './BugsDirectoryComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const mapStateToProps = state => {
    return {
        bugs: state.bugs,
        fishes: state.fishes,
        seacreatures: state.seacreatures
    };
};

// class BugsTab extends Component {

//     static navigationOptions = {
//         title: 'Bugs Directory'
//     }

//     render () {
//         const { navigate } = this.props.navigation;
//         const renderBugDirectoryItem = ({item}) => {
//             return (
//                 <ListItem
//                     title={item.name}
//                     subtitle={item.catchphrase}
//                     //leftAvatar={{ source: require('./images/react-lake.jpg')}}
//                     onPress={() => navigate('BugInfo', { bugId: item.id })}
//                     leftAvatar={{ source: {uri: item.icon}}}
//                 />
//             );
//         };

//         if (this.props.bugs.isLoading) {
//             return <Loading />;
//         }
//         if (this.props.bugs.errMess) {
//             return (
//                 <View>
//                     <Text>{this.props.bugs.errMess}</Text>
//                 </View>
//             );
//         }
    
//         return (
//             <FlatList
//                 data={this.props.bugs.bugs}
//                 renderItem={renderBugDirectoryItem}
//                 keyExtractor={item => item.id.toString()}
//             />
//         );
//     } 
// }

class BugsTab extends Component {
    render() {
        return (
            //<BugsDirectory />
            <Directory />
        );
    }
}

class FishesTab extends Component {
    render() {
        return (
            <Text>It fish works</Text>
        );
    }
}

class SeacreaturesTab extends Component {
    render() {
        return (
            <Text>It sea works</Text>
        );
    }
}

// class FishesTab extends Component {

//     static navigationOptions = {
//         title: 'Fish Directory'
//     }

//     render () {
//         const { navigate } = this.props.navigation;
//         const renderFishDirectoryItem = ({item}) => {
//             return (
//                 <ListItem
//                     title={item.name}
//                     subtitle={item.catchphrase}
//                     //leftAvatar={{ source: require('./images/react-lake.jpg')}}
//                     //onPress={() => navigate('BugInfo', { bugId: item.id })}
//                     leftAvatar={{ source: {uri: item.icon}}}
//                 />
//             );
//         };

//         if (this.props.fishes.isLoading) {
//             return <Loading />;
//         }
//         if (this.props.fishes.errMess) {
//             return (
//                 <View>
//                     <Text>{this.props.fishes.errMess}</Text>
//                 </View>
//             );
//         }
    
//         return (
//             <FlatList
//                 data={this.props.fishes.fishes}
//                 renderItem={renderFishDirectoryItem}
//                 keyExtractor={item => item.id.toString()}
//             />
//         );
//     } 
// }

// class SeacreaturesTab extends Component {

//     static navigationOptions = {
//         title: 'Seacreatures Directory'
//     }

//     render () {
//         const { navigate } = this.props.navigation;
//         const renderSeacreatureDirectoryItem = ({item}) => {
//             return (
//                 <ListItem
//                     title={item.name}
//                     subtitle={item.catchphrase}
//                     //leftAvatar={{ source: require('./images/react-lake.jpg')}}
//                     //onPress={() => navigate('BugInfo', { bugId: item.id })}
//                     leftAvatar={{ source: {uri: item.icon}}}
//                 />
//             );
//         };

//         if (this.props.seacreatures.isLoading) {
//             return <Loading />;
//         }
//         if (this.props.seacreatures.errMess) {
//             return (
//                 <View>
//                     <Text>{this.props.seacreatures.errMess}</Text>
//                 </View>
//             );
//         }
    
//         return (
//             <FlatList
//                 data={this.props.seacreatures.seacreatures}
//                 renderItem={renderSeacreatureDirectoryItem}
//                 keyExtractor={item => item.id.toString()}
//             />
//         );
//     } 
// }

const CrittersDirectory = createBottomTabNavigator(
    {
        Bugs: BugsTab,
        Fishes: FishesTab,
        Seacreatures: SeacreaturesTab 
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#5637DD',
            inactiveBackgroundColor: '#CEC8FF',
            activeTintColor: '#fff',
            inactiveTintColor: '#808080',
            labelStyle: {fontSize: 16}
        }
    }
);

export default CrittersDirectory;