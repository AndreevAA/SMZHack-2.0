
/*
    Это говно, есть плейсхолдер для элемента списка новостей,
    собственно тут мы верстаем элемент списка... 
*/

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

// Что то подобное будет потом использоваться но я хуй знает
// export class NewsListItem extends Component {
//   render = () => {
//     const {onPress, newsItem} = this.props;

//     return (
//       <TouchableOpacity style={styles.container} onPress={onPress}>
//         // Ну тут картинка
//         <Image
//           source={{uri: newsItem.picture.medium}}
//         />
//         <View style={styles.textView}>
//           <Text style={styles.title}>
//             {newsItem.title}
//           </Text>
//           <Text style={styles.brief}>{newsItem.brief}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };
// }


export class PersonListItem extends Component {
  render = () => {
    const {onPress, person} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={{uri: person.picture.medium}}
          resizeMode={'contain'}
          style={styles.avatar}
        />
        <View style={styles.col}>
          <Text style={styles.name}>
            {person.name.first} {person.name.last}
          </Text>
          <Text style={styles.email}>{person.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  col: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#2e2e2e',
  },
  email: {
    marginTop: 10,
    fontSize: 13,
    color: '#b0b0b0',
  },
});