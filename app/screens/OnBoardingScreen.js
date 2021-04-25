import { Image, Button } from 'react-native';
import React, {Component} from 'react';

import Onboarding from 'react-native-onboarding-swiper';

export class OnBoardingScreen extends Component {
  render = () => {
    return(
      <Onboarding
      
      onDone={() => {
        this.props.navigation.navigate('Entry');
      }}

      onSkip={() => {
        this.props.navigation.navigate('Entry');
      }}
      
      nextLabel={'Далее'}
      skipLabel={'Пропустить'}

      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/clock.png')} />,
          title: 'Наймикс и хуё моё',
          subtitle: 'Ну тут типа какой-то текст.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/pig.png')} />,
          title: 'Деньги',
          subtitle: 'Ебать свинья там жирная, да?',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/list.png')} />,
          title: 'Большой листок',
          subtitle: "Сейчас бы себе тетрадь больше себя делать...",
        },
      ]}
    />
    )
  }
}