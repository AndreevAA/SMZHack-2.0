import React, {Component} from 'react';
import {View, Image} from 'react-native'


export class StoryScreen extends Component {
    render = () => {
        const {story} = this.props;
        return (
            <Image source={require('../assets/images/story.png')}
                   style={{
                    flex:1,
                    justifyContent: 'space-evenly',
                    alignContent: 'stretch',
                    height: "70%",
                    width: "100%",
                }}
            />
        );  
    };    
}

