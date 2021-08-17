import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import CrittersDirectory from './CrittersDirectoryComponent';
import BugsDirectory from './BugsDirectoryComponent';
import FishesDirectory from './FishesDirectoryComponent';
import SeacreaturesDirectory from './SeacreaturesDirectoryComponent';
import ArtsDirectory from './ArtsDirectoryComponent';
import FossilsDirectory from './FossilsDirectoryComponent';
import BugInfo from './BugInfoComponent';
import FishInfo from './FishInfoComponent';
import SeacreatureInfo from './SeacreatureInfoComponent';
import ArtInfo from './ArtInfoComponent';
import FossilInfo from './FossilInfoComponent';
import Donations from './DonationsComponent';
import BugDonations from './BugDonationsComponent';
import FishDonations from './FishDonationsComponent';
import SCDonations from './SCDonationsComponent';
import ArtDonations from './ArtDonationsComponent';
import FossilDonations from './FossilDonationsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import SaveDate from './SaveDateComponent';
import Constants from 'expo-constants';
import { View, Platform, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

const DonationsNavigator = createStackNavigator(
    {
        Donations: { screen: Donations },
        FishDonations: { screen: FishDonations },
        BugDonations: { screen: BugDonations },
        SCDonations: { screen: SCDonations },
        ArtDonations: { screen: ArtDonations },
        FossilDonations: { screen: FossilDonations }
        
    }, 
    {
        initialRouteName: 'Donations',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

// const BugDonationsNavigator = createStackNavigator(
//     {
//         BugDonations: { screen: BugDonations },
        
//     }, 
//     {
//         initialRouteName: 'BugDonations',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#F4A460'
//             },
//             headerTintColor: '#000',
//             headerTitleStyle: {
//                 color: '#000'
//             }
//         }
//     }
// );

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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

const ArtsDirectoryNavigator = createStackNavigator(
    {
        ArtsDirectory: { screen: ArtsDirectory },
        ArtInfo: {screen: ArtInfo}
        
    }, 
    {
        initialRouteName: 'ArtsDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

const FossilsDirectoryNavigator = createStackNavigator(
    {
        FossilsDirectory: { screen: FossilsDirectory },
        FossilInfo: {screen: FossilInfo}
        
    }, 
    {
        initialRouteName: 'FossilsDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                backgroundColor: '#F4A460'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
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
                    <Text style={{fontWeight: "bold", color: "#000"}}>Animal Crossing:</Text>
                    <Text style={{fontStyle: "italic", color: "#000", marginLeft: 50}}>New Horizon</Text>
                    <Text style={styles.drawerHeaderText}>Museum Tracker</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        //Directory: { screen: DirectoryNavigator },

        Donations: { 
            screen: DonationsNavigator, 
            navigationOptions: {
                drawerLabel: 'My Donations',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='box-open'
                        type='font-awesome-5'
                        size={18}
                        color={tintColor}
                    />
                )
            }
        },
        // BugDonations: { 
        //     screen: BugDonationsNavigator, 
        //     navigationOptions: {
        //         drawerLabel: 'My Bug Donations',
        //         drawerIcon: ({tintColor}) => (
        //             <Icon
        //                 name='box-open'
        //                 type='font-awesome-5'
        //                 size={18}
        //                 color={tintColor}
        //             />
        //         )
        //     }
        // },
        BugsDirectory: { 
            screen: BugsDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Bugs',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='spider'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        FishesDirectory: { 
            screen: FishesDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Fish',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='fish'
                        type='font-awesome-5'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        },
        SeacreaturesDirectory: { 
            screen: SeacreaturesDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Sea Creatures',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='swimmer'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        ArtsDirectory: { 
            screen: ArtsDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Art',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='broom'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        FossilsDirectory: { 
            screen: FossilsDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Fossils',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='bone'
                        type='font-awesome-5'
                        size={19}
                        color={tintColor}
                    />
                )
            }
        },
        //CrittersDirectory: { screen: CrittersDirectoryNavigator },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        SaveDate: {
            screen: SaveDateNavigator,
            navigationOptions: {
                drawerLabel: 'Save a Date',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='calendar-alt'
                        type='font-awesome-5'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#FFDAB9',
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
        backgroundColor: '#F4A460',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#000',
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