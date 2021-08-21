import React, {Component} from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        fossils: state.fossils
    };
};

class FossilsDirectory extends Component {

    static navigationOptions = {
        title: 'Fossils Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderFossilDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    titleStyle={{
                        fontFamily: "Fink-Heavy",
                        fontSize: 20
                    }}
                    //subtitle={item.catchphrase}
                    
                    onPress={() => navigate('FossilInfo', { fossilId: item.id })}
                    leftAvatar={{ source: {uri: baseUrl + 'images/fossil_icon.png'}}}
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
            );
        };

        if (this.props.fossils.isLoading) {
            return <Loading />;
        }
        if (this.props.fossils.errMess) {
            return (
                <View>
                    <Text>{this.props.fossils.errMess}</Text>
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
                    data={this.props.fossils.fossils}
                    renderItem={renderFossilDirectoryItem}
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

export default connect(mapStateToProps)(FossilsDirectory);