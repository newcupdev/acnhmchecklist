import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import { FISHES } from '../shared/fishes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fishes: FISHES
        };
    }

    render() {
        return <Directory fishes={this.state.fishes} />;
    }
}

export default Main;