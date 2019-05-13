import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Visitor'
  };

  render () {
    const { navigation } = this.props
    const id = navigation.getParam('id')
    return (
      <ScrollView style={styles.container}>
        <Text>Visitor screen {id}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  }
})
