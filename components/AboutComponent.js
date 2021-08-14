import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';



class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        return (
            <ScrollView>
                <Tile
                    imageSrc={{uri: baseUrl + 'images/acnh_museum.png'}}
                    featured
                    
                    />
                <Tile
                    imageSrc={{uri: baseUrl + 'images/blathers_book.png'}}
                    featured
                    
                />
            
        </ScrollView>
        );
    }
}

export default About;