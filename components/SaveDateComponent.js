import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert, Picker, Switch, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

class SaveDate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dayEvent: 'Bug off',
            myIsland: false,
            date: new Date(),
            showCalendar: false
        };
    }

    static navigationOptions = {
        title: 'Save the date!'
    }

    resetForm() {
        this.setState({
            dayEvent: 'Bug off',
            myIsland: false,
            date: new Date(),
            showCalendar: false     
        });
    }

    async presentLocalNotification(date, dayEvent, myIsland) {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            let location = ({myIsland} ? 'in my island' : 'in my friend\'s island') 

            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Your Save the day event',
                    body: `Save ${date} for ${dayEvent} ${location}`
                },
                trigger: null
            });
        }

        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#F4A460'}}>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                    <View style={styles.imageContainer}>
                        <Image 
                            style={{resizeMode: 'cover', width: 500, height: 330}}
                            source={{uri: baseUrl + 'images/bugoff.jpg'}} 
                            
                            />
                        
                    </View>

                    <View style={styles.imageContainer}>
                        <Image 
                            style={{resizeMode: 'cover', width: 500, height: 330}}
                            source={{uri: baseUrl + 'images/fishtourney.png'}} 
                            />
                    </View>

                    <View style={styles.formViewContainer}>

                        
                    
                            <View style={styles.formRow}>
                                <Text style={styles.formLabel}>Event</Text>
                                <Picker 
                                    style={styles.formItem}
                                    selectedValue={this.state.dayEvent}
                                    onValueChange={itemValue => this.setState({dayEvent: itemValue})}
                                >
                                    <Picker.Item label='Bug off' value='Bug off' />
                                    <Picker.Item label='Fish tourney' value='Fish tourney' />
                                    
                                </Picker>
                            </View>
    
                            <View style={styles.formRow}>
                                <Text style={styles.formLabel}>My island?</Text>
                                <Switch
                                    style={styles.formItem}
                                    value={this.state.myIsland}
                                    trackColor={{true: '#F4A460', false: null}}
                                    onValueChange={value => this.setState({myIsland: value})}
                                />
                            </View>

                            <View style={styles.formRow}>
                                <Text style={styles.formLabel}>Date</Text>
                                <Button
                                    onPress={() =>
                                        this.setState({showCalendar: !this.state.showCalendar})
                                    }
                                    title={this.state.date.toLocaleDateString('en-US')}
                                    titleStyle={{
                                        fontFamily: 'Varela-Round'
                                    }}
                                    
                                    accessibilityLabel='Tap me to save the date'
                                    buttonStyle={{
                                        borderRadius: 20,
                                        backgroundColor: '#F4A460',
                                        margin: 5
                                    }}
                                    
                                />
                            </View>
    
                            {this.state.showCalendar && (
                                <DateTimePicker
                                    value={this.state.date}
                                    mode={'date'}
                                    display='default'
                                    onChange={(event, selectedDate) => {
                                        selectedDate && this.setState({date: selectedDate, showCalendar: false});
                                    }}
                                    style={styles.formItem}
                                />
                            )}
    
                            <View style={styles.formRow}>
                                <Button
                                    
                                    title='Save'
                                    titleStyle={{
                                        fontFamily: 'Varela-Round'
                                    }}
                                    buttonStyle={{
                                        borderRadius: 20,
                                        backgroundColor: '#F4A460',
                                        margin: 5,
                                        width: 80
                                    }}
                                    accessibilityLabel='Tap me to save the date'
                
                                    onPress={() =>
                                        Alert.alert(
                                            'Begin Saving',
                                            'Event of the day: ' + this.state.dayEvent + '\n \n' +
                                            'The event will be ' + (this.state.myIsland ? 'in my island' : 'in my friend\'s island') + '\n \n' +
                                            'Date: ' + this.state.date.toLocaleDateString('en-US'),
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: () => this.resetForm(),
                                                    style: 'cancel'
                                                },
                                                {
                                                    text: 'OK',
                                                    onPress: () => {
                                                        this.presentLocalNotification(this.state.date.toLocaleDateString('en-US'), this.state.dayEvent, this.state.myIsland);
                                                        this.resetForm();
                                                    }
                                                },
                                            ],
                                            { cancelable: false }
                                        )
                                    }
                                />
                            </View>
                        
                    </View>
                </View>

                
                
                
                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1, 
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    container: {
        justifyContent: 'center',
        margin: 30,
        alignItems: 'center',
        
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: 17
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    formLabel: {
        fontSize: 20,
        fontFamily: 'Fink-Heavy',
        flex: 2
    },
    formItem: {
        flex: 3
    },
    formViewContainer: {
        margin: 30,
        padding: 20, 
        backgroundColor: 'rgba(255,248,220,0.75)', 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: 350,
        height: 200,
        borderRadius: 20
        
    }
});

export default SaveDate