import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/isabelle_contact.png'}}
                    featured
                />
                <Card
                    title="Contact Information"
                    wrapperStyle={{margin: 20}}>

                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{marginBottom: 10}}>U.S.A.</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>

                </Card>

            </ScrollView>
        );
    }
}

export default Contact;