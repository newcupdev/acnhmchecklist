import React, {Component} from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        bugs: state.bugs
    };
};

class BugsDirectory extends Component {

    static navigationOptions = {
        title: 'Bugs Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderBugDirectoryItem = ({item}) => {
            return (
                <Animatable.View
                    animation='bounceInDown'
                    duration={2000}
                    delay={1000}
                >
                    <ListItem
                        title={item.name}
                        titleStyle={{
                            fontFamily: "Fink-Heavy",
                            fontSize: 20
                        }}
                        //subtitle={item.catchphrase}
                    
                        onPress={() => navigate('BugInfo', { bugId: item.id })}
                        leftAvatar={{ source: {uri: item.icon}}}
                        contentContainerStyle={{
                            alignItems: "center",
                            marginRight: 35
                        }}
                        containerStyle={{
                            backgroundColor: "#FFE4B5",
                            borderRadius: 20,
                            overflow: "hidden",
                            margin: 8,
                            
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.75,
                            shadowRadius: 5,
                            elevation: 9
                        }}
                    />
                </Animatable.View>
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
            <ImageBackground 
                source={{uri: baseUrl + 'images/leaf_icon_bg.png'}}
                resizeMode="cover"
                style={styles.image}
                blurRadius={.75}
                >
                <FlatList
                    data={this.props.bugs.bugs}
                    renderItem={renderBugDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      }
});

export default connect(mapStateToProps)(BugsDirectory);