import { Image } from 'react-native';
import React, {Component} from 'react';

import Onboarding from 'react-native-onboarding-swiper';

export class OnBoardingScreen extends Component {
  render = () => {
    return(
      <Onboarding
      
      onDone={() => {
        this.props.navigation.navigate('Login');
      }}
  
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/circle.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: <Image source={require('../assets/images/square.png')} />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          image: <Image source={require('../assets/images/triangle.png')} />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
    )
  }
}