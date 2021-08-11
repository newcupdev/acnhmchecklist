import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';




function SaveIt() {
    return(
        <Card
            title="Our Mission">
            <Text style={{margin: 10}}>
            reference to reservation component from the nucampsite project
            </Text>
        </Card>
    );
}


class SaveDate extends Component {

    static navigationOptions = {
        title: 'Save the date! '
    }

    render() {

        return (
            <ScrollView>
                
                <SaveIt />
                
            </ScrollView>
        );
    }
}

export default SaveDate;