import React from 'react'
import ConfigView from '../components/ConfigView'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json'
  };

  render () {
    return <ConfigView />
  }
}
