import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import CrittersDirectory from './CrittersDirectoryComponent';
import BugsDirectory from './BugsDirectoryComponent';
import FishesDirectory from './FishesDirectoryComponent';
import SeacreaturesDirectory from './SeacreaturesDirectoryComponent';
import ArtsDirectory from './ArtsDirectoryComponent';
import BugInfo from './BugInfoComponent';
import FishInfo from './FishInfoComponent';
import SeacreatureInfo from './SeacreatureInfoComponent';
import Donations from './DonationsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import SaveDate from './SaveDateComponent';
import Constants from 'expo-constants';
import { View, Platform, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { fetchBugs, fetchFishes, fetchSeacreatures, fetchArts, fetchFossils } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchBugs,
    fetchFishes,
    fetchSeacreatures,
    fetchArts,
    fetchFossils
};


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

// const DirectoryNavigator = createStackNavigator(
//     {
//         Directory: { screen: Directory }
//     }, 
//     {
//         initialRouteName: 'Directory',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#5637DD'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#fff'
//             }
//         }
//     }
// );

const BugsDirectoryNavigator = createStackNavigator(
    {
        BugsDirectory: { screen: BugsDirectory },
        BugInfo: {screen: BugInfo}
    }, 
    {
        initialRouteName: 'BugsDirectory',
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

const FishesDirectoryNavigator = createStackNavigator(
    {
        FishesDirectory: { screen: FishesDirectory },
        FishInfo: {screen: FishInfo}
    }, 
    {
        initialRouteName: 'FishesDirectory',
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

const SeacreaturesDirectoryNavigator = createStackNavigator(
    {
        SeacreaturesDirectory: { screen: SeacreaturesDirectory },
        SeacreatureInfo: {screen: SeacreatureInfo}
    }, 
    {
        initialRouteName: 'SeacreaturesDirectory',
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

const ArtsDirectoryNavigator = createStackNavigator(
    {
        ArtsDirectory: { screen: ArtsDirectory }
        
    }, 
    {
        initialRouteName: 'ArtsDirectory',
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

// const CrittersDirectoryNavigator = createStackNavigator(
//     {
//         CrittersDirectory: { screen: CrittersDirectory },
//         BugsDirectory: {screen: BugsDirectory},
//         BugInfo: {screen: BugInfo}
//     }, 
//     {
//         initialRouteName: 'CrittersDirectory',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#5637DD'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#fff'
//             }
//         }
//     }
// );

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

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={{uri: baseUrl + 'images/blathers_icon.png'}} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={{fontWeight: "bold", color: "#fff"}}>Animal Crossing:</Text>
                    <Text style={{fontStyle: "italic", color: "#fff", marginLeft: 50}}>New Horizon</Text>
                    <Text style={styles.drawerHeaderText}>Museum Tracker</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        //Directory: { screen: DirectoryNavigator },
        Donations: { screen: DonationsNavigator },
        BugsDirectory: { screen: BugsDirectoryNavigator },
        FishesDirectory: { screen: FishesDirectoryNavigator },
        SeacreaturesDirectory: { screen: SeacreaturesDirectoryNavigator },
        ArtsDirectory: { screen: ArtsDirectoryNavigator },
        //CrittersDirectory: { screen: CrittersDirectoryNavigator },
        About: {screen: AboutNavigator},
        Contact: {screen: ContactNavigator},
        SaveDate: {screen: SaveDateNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    componentDidMount() {
        this.props.fetchBugs();
        this.props.fetchFishes();
        this.props.fetchSeacreatures();
        this.props.fetchArts();
        this.props.fetchFossils();
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 3
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


export default connect(null, mapDispatchToProps)(Main);