import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
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
            <View>
                <ScrollView style={{backgroundColor: '#FFDAB9'}}>
                    <Tile
                        imageSrc={{uri: bug.image}}
                        featured
                    />

                    <Card
                        title= {bug.name}
                        wrapperStyle={{margin: 20}}>
                        
                        <Text style={styles.textLabel}>Region Availability (North/South): </Text>
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
                        <Text style={{marginBottom: 20}}>{'\t'}{bug.museumphrase}</Text>

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
                </ScrollView>
            </View>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BugInfo);