// import React, { Component } from 'react';
// import { Text } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello World!</Text>
//     );
//   }
// }

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  SectionList
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '567'

    }
  }
  render() {
    let pic = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531227182211&di=69f7666e014526d88a8460a3f77548e2&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D811927623%2C4166245411%26fm%3D214%26gp%3D0.jpg'
    };
    return (<View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to solve conflict!
      </Text>
      <TextInput style={styles.textInput} placeholder='Type here to translate!' onChangeText={(text) => this.setState({text})}/>
      <Text>{this.state.text.split(' ').map((word) => word + '*').join(' ')}</Text>
      <ScrollView>
        <Text>This is line one</Text>
        <Image source={pic} style={styles.picture}/>
        <Image source={pic} style={styles.picture}/>
        <Image source={pic} style={styles.picture}/>
        <Text>modified by huopanpan</Text>
        <Image source={pic} style={styles.picture}/>
        <Image source={pic} style={styles.picture}/>
      </ScrollView>
      <FlatList data={[
          {
            key: 'apple'
          }, {
            key: 'watermalon'
          }, {
            key: 'grape'
          }, {
            key: 'banana'
          }, {
            key: 'cheery'
          }, {
            key: 'buleberry'
          }
        ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
      <SectionList sections={[
          {
            key: 'classOne',
            data: ['Lily', 'Robot', 'Yaya']
          }, {
            key: 'classTwo',
            data: ['Juga', 'Lucy', 'God']
          }
        ]} renderSectionHeader={({section}) => <Text>{section.key}</Text>} renderItem={({item}) => <Text style={styles.item}>{item}</Text>}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  textInput: {
    height: 60,
    backgroundColor: '#ece8e0'
  },
  picture: {
    width: 200,
    height: 160
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
