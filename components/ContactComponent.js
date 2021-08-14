import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Tile, Button, Icon } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import * as MailComposer from 'expo-mail-composer';

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
                    title="Do you have any feedback?"
                    wrapperStyle={{margin: 20}}>

                <Text>Please click the email icon below to email us for any issues like: {'\n'}</Text>
                <Text>{'\t'}Misinformation</Text>
                <Text>{'\t'}Application error</Text>
                <Text>{'\t'}Server issues</Text>

                
                <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: '#F4A460', margin: 40}}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{marginRight: 10}}
                        />}
                        onPress={() => this.sendMail()}
                    />

                </Card>

            </ScrollView>
        );
    }
}

export default Contact;