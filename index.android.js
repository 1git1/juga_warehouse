// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

class Greeting extends Component {
  render() {
    return (<Text>Hello {this.props.name}!</Text>);
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    //每1000毫秒对showText的值取反
    setInterval(() => {
      this.setState(previousState => {
        return {
          showText: !previousState.showText
        };
      });
    }, 1000);
  }
  render() {
    //根据showText的值来决定是否显示text
    let display = this.state.showText
      ? this.props.text
      : 'false';
    return (<Text>{display}</Text>);
  }
}

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531227182211&di=69f7666e014526d88a8460a3f77548e2&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D811927623%2C4166245411%26fm%3D214%26gp%3D0.jpg'
    };
    return (<View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
      <Blink style={styles.blue} text='look at me'/>
      <Greeting style={[styles.blue, styles.red]} name='Juga'/>
      <Image source={pic} style={{
          width: 200,
          height: 160
        }}/>
      <Text style={styles.red}>i am red !</Text>
      <Text style={[styles.red, styles.blue]}>i am blue !</Text>
      <View style={styles.items1}/>
      <View style={styles.items2}/>
      <View style={styles.items3}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  items1: {
    height: 30,
    width: 30,
    backgroundColor: 'powderblue'
  },
  items2: {
    height: 30,
    width: 30,
    backgroundColor: 'skyblue'
  },
  items3: {
    height: 30,
    width: 30,
    backgroundColor: 'steelblue'
  },
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
  }
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
