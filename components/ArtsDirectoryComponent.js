import React, {Component} from 'react';
import { FlatList, View, Text, Modal, Button, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Loading from './LoadingComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        arts: state.arts
    };
};

class ArtsDirectory extends Component {

    constructor(props){
        super(props);

        this.state = {
           
            showModal: false
        }
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    showArt(artId){
        console.log(artId);
        console.log(this.props.arts);
        this.toggleModal();
    }

    static navigationOptions = {
        title: 'Arts Directory'
    }

    render () {
        const { navigate } = this.props.navigation;
        const artId = this.props.navigation.getParam('artId');
        const art = this.props.arts.arts.filter(art => art.id === artId)[0];
        const renderArtDirectoryItem = ({item}) => {
            return (
                <View>
                    <View>
                        <ListItem
                            title={item.name}
                            //subtitle={item.catchphrase}
                            //leftAvatar={{ source: require('./images/react-lake.jpg')}}
                            //onPress={() => navigate('BugInfo', { bugId: item.id })}
                            
                            leftAvatar={{ source: {uri: baseUrl + 'images/leaf_icon.png'}}}
                            onPress={() => this.showArt(item.name)}
                        />
                    </View>
                </View>
            );
        };

        if (this.props.arts.isLoading) {
            return <Loading />;
        }
        if (this.props.arts.errMess) {
            return (
                <View>
                    <Text>{this.props.arts.errMess}</Text>
                </View>
            );
        }
    
        return (
            
            <View>
                
                <FlatList
                    data={this.props.arts.arts}
                    renderItem={renderArtDirectoryItem}
                    keyExtractor={item => item.id.toString()}
                    
                />
            
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.showModal}
                onRequestClose={() => this.toggleModal()}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalText}>{this.props.arts.name}</Text>
                    
                    <Button
                        onPress={() => {
                            this.toggleModal();
                        }}
                        color='#5637DD'
                        title='Close'
                    />
                </View>
                

            </Modal> 
   
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default connect(mapStateToProps)(ArtsDirectory);