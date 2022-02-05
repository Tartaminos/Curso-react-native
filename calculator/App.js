
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Button from './src/components/Button';

export default class App extends Component {
  render(){
    return (
        <View style={styles.buttons}>
          <Button label='AC' />
          <Button label='/' />
          <Button label='7' />
          <Button label='8' />
          <Button label='9' />
          <Button label='*' />
          <Button label='4' />
          <Button label='5' />
          <Button label='6' />
          <Button label='-' />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' />
          <Button label='0' />
          <Button label='.' />
          <Button label='=' />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

