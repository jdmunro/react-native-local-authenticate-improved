/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import LocalAuthenticate from 'react-native-local-authenticate-improved'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button onPress={() => {
          LocalAuthenticate.hasHardware().then((hasHardware) => {
            console.log('Has Hardware: ' + hasHardware)
          })
        }} title={'Has Hardware'} />
        <Button onPress={() => {
          LocalAuthenticate.isEnrolled().then((isEnrolled) => {
            console.log('Is Enrolled: ' + isEnrolled)
          })
        }} title={'Is Enrolled'} />
        <Button onPress={() => {
          LocalAuthenticate.supportedAuthenticationTypes().then((isEnrolled) => {
            console.log('Supported Authentication Types: ' + isEnrolled)
          })
        }} title={'Supported Authentication Types'} />
        <Button onPress={() => {
          LocalAuthenticate.authenticate('reason').then((isEnrolled) => {
            console.log('Authenticate: ' + isEnrolled)
          })
        }} title={'Authenticate'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});