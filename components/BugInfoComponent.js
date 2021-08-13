import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        bugs: state.bugs
    };
};



function RenderBug({bug}) {

    if (bug) {
        return (
            <View>
                <ScrollView>
                    <Tile
                        imageSrc={{uri: bug.image}}
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
                        <Text>{'\t'}{bug.museumphrase}</Text>

                        

                    </Card>
                </ScrollView>
            </View>
        );
    }
    return <View />;
}

class BugInfo extends Component {

    static navigationOptions = {
        title: 'Bug Information'
    }

    render() {
        const bugId = this.props.navigation.getParam('bugId');
        const bug = this.props.bugs.bugs.filter(bug => bug.id === bugId)[0];
        return <RenderBug bug={bug} />;
    }
}

const styles = StyleSheet.create({
    textLabel: {
        fontWeight: "bold"
    }
});

export default connect(mapStateToProps)(BugInfo);