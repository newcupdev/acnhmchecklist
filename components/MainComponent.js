import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import Home from './HomeComponent';
import Donations from './DonationsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import SaveDate from './SaveDateComponent';
import { FISHES } from '../shared/fishes';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const DonationsNavigator = createStackNavigator(
    {
        Donations: { screen: Donations }
    }, 
    {
        initialRouteName: 'Donations',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    }, 
    {
        initialRouteName: 'About',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    }, 
    {
        initialRouteName: 'Contact',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const SaveDateNavigator = createStackNavigator(
    {
        SaveDate: { screen: SaveDate }
    }, 
    {
        initialRouteName: 'SaveDate',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);



const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Donations: { screen: DonationsNavigator },
        About: {screen: AboutNavigator},
        Contact: {screen: ContactNavigator},
        SaveDate: {screen: SaveDateNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fishes: FISHES
        };
    }

    render() {
        // return <Directory fishes={this.state.fishes} />;
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;