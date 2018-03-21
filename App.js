import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { compose, graphql } from 'react-apollo'
import ListPeople from './getPeople'

class App extends Component {
  render() {
    console.log('props:', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        {
          this.props.people.map(person => (
            <Text>{person.name}</Text>
          ))
        }
      </View>
    );
  }
}

export default compose(
  graphql(ListPeople, {
      props: props => {
        console.log('pppprops:', props)
        return {
          people: props.data.listPeople ? props.data.listPeople.items : [],
        }
      }
  })
)(App)

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
