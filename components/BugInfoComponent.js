import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Tile, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { postBugDonation } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        bugs: state.bugs,
        bugDonations: state.bugDonations
    };
};

const mapDispatchToProps = {
    postBugDonation: bugId => (postBugDonation(bugId))
};



function RenderBug(props) {

    const {bug} = props;

    if (bug) {
        return (
            <ImageBackground 
                source={{uri: baseUrl + 'images/acnh_grass_bg.jpg'}}
                resizeMode="repeat"
                blurRadius={1}
                style={styles.image}
                >
                <ScrollView>
                    <Tile
                        imageSrc={{uri: bug.image}}
                        featured
                        imageProps={{
                            resizeMode: "contain"
                        }}
                    />

                    <Card
                        title= {bug.name}
                        titleStyle={{
                            fontFamily: 'Fink-Heavy',
                            fontWeight: 'normal',
                            fontSize: 25
                        }}
                        containerStyle={{
                            backgroundColor: '#FFE4B5', 
                            margin: 10,
                            borderRadius: 20,
                            overflow: 'hidden',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 5,
                                height: 5
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 5,
                            elevation: 9
                            }}
                        >
                        {/* wrapperStyle={{margin: 1}} */}

                        <View style={{margin: 5}}>
                            
                            <View style={{
                                backgroundColor: 'gray', 
                                flex: 1, 
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'}}>

                                <Text>Region Availability:</Text>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                        <Text>North</Text>
                                    </View>
                                    <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                        <Text>{bug.northavailability}</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                        <Text>South</Text>
                                    </View>
                                    <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                        <Text>{bug.southavailability}</Text>
                                    </View>
                                </View>

                            </View>
                            
                            <View style={{
                                backgroundColor: 'gray',
                                flexDirection: 'row',
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                }}>
                                <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                    <Text>Location</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                    <Text>{bug.location}</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'gray',
                                flexDirection: 'row',
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                }}>
                                <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                    <Text>Rarity</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                    <Text>{bug.rarity}</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'gray',
                                flexDirection: 'row', 
                                flex: 1, 
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                
                                }}>
                                <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                    <Text>Price</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                    <Text>{bug.price}</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'gray', 
                                flexDirection: 'row',
                                flex: 1, 
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                
                                }}>
                                <View style={{backgroundColor: 'green', flex: 1, margin: 5}}>
                                    <Text>Flick Price</Text>
                                </View>
                                <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                    <Text>{bug.flickprice}</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'gray', 
                                flex: 1, 
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                }}>
                                <Text>Your catchphrase</Text>
                                <View style={{backgroundColor: 'blue', flex: 2, margin: 5}}>
                                    <Text>{bug.catchphrase}</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: 'gray', 
                                flex: 1, 
                                margin: 3,
                                padding: 10, 
                                borderRadius: 10, 
                                overflow: 'hidden'
                                }}>
                                <Text>Blather's Catchphrase</Text>
                                
                                <View style={{backgroundColor: 'blue', flex: 3, margin: 5}}>
                                    <Text>{bug.museumphrase}</Text>
                                </View>
                            </View>
                        </View>
                        
                        {/* <View style={{borderColor: '#000', margin: 10}}>
                            <Text style={styles.textLabel}>Region Availability (North/South): </Text>
                        </View>
                        
                        <Text><Text style={styles.textLabel}>N: </Text>{bug.northavailability}</Text>
                        <Text><Text style={styles.textLabel}>S: </Text>{bug.southavailability}</Text>


                        <Text><Text style={styles.textLabel}>Time: </Text> {bug.time}</Text>
                        <Text><Text style={styles.textLabel}>Location: </Text> {bug.location}</Text>
                        <Text><Text style={styles.textLabel}>Rarity: </Text> {bug.rarity}</Text>
                        <Text><Text style={styles.textLabel}>Price: </Text> {bug.price} bells</Text>
                        <Text><Text style={styles.textLabel}>Flick price: </Text> {bug.flickprice} bells</Text>

                        <Text style={styles.textLabel}>Your catchphrase: </Text>
                        <Text>{'\t'}{bug.catchphrase}</Text>

                        <Text style={styles.textLabel}>Blather's catchphrase: </Text>
                        <Text style={{marginBottom: 20}}>{'\t'}{bug.museumphrase}</Text> */}

                        <View style={{alignItems: 'center'}}>
                            <Icon
                                name={props.bugDonation ? 'check-circle-o' : 'circle-o'}
                                type='font-awesome'
                                color='#2E8B57'
                                raised
                                reverse
                                size = {30}
                                onPress={() => props.bugDonation ? 
                                    console.log('Already set as a favorite') : props.markBugDonation()}
                            />
                        </View>
                    </Card>

                    {/* <View style={{
                        margin: 10,
                        borderRadius: 20,
                        overflow: 'hidden'
                    }}>
                        <View style={{backgroundColor: 'red', borderColor: '#000', borderWidth: 2, borderRadius: 20, padding: 10}}>
                            <Text style={{textAlign: 'center', fontFamily: 'Fink-Heavy', fontSize: 25}}>{bug.name}</Text>
                        </View>
                        <View>
                            <Text>test</Text>
                        </View>
                    </View> */}
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

                </ScrollView>
            </ImageBackground>
        );
    }
    return <View />;
}

class BugInfo extends Component {


    markBugDonation(bugId) {
        this.props.postBugDonation(bugId);
    }


    static navigationOptions = {
        title: 'Bug Information'
    }

    render() {
        const bugId = this.props.navigation.getParam('bugId');
        const bug = this.props.bugs.bugs.filter(bug => bug.id === bugId)[0];
        return <RenderBug 
            bug={bug} 
            bugDonation = {this.props.bugDonations.includes(bugId)}
            markBugDonation = {()=>this.markBugDonation(bugId)}
        />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BugInfo);