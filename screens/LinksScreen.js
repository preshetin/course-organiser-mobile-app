import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import VisitorsListView from '../components/VisitorsListView'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <VisitorsListView
          data={[
            { title: 'fffoo', id: 'aa1Devin' },
            { title: 'foo', id: '1Jackson' },
            { title: 'foo', id: '1James' },
            { title: 'foo', id: '1Joel' },
            { title: 'foo', id: '1John' },
            { title: 'foo', id: '1Jillian' },
            { title: 'foo', id: '1Jimmy' },
            { title: 'foo', id: '12Devin' },
            { title: 'foo', id: 'Jackson' },
            { title: 'foo', id: 'James' },
            { title: 'foo', id: 'Joel' },
            { title: 'foo', id: 'John' },
            { title: 'foo', id: 'Jillian' },
            { title: 'foo', id: 'Jimmy' },
            { title: 'foo', id: 'Julie' }
          ]}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
