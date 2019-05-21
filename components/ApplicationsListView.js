import React, { Component } from 'react'
import { TouchableOpacity,
  FlatList, StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item)
  };

  render () {
    const { title } = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={styles.item}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class MultiSelectList extends React.PureComponent {
  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (item) => {
    this.props.navigation.navigate('Application', {
      application: item,
      id: item.id,
      title: item.firstName && item.lastName ? `${item.firstName} ${item.lastName}` : 'Application'
    })
  };

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      item={item}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={`${item.firstName} ${item.lastName}`}
    />
  );

  render () {
    const { data } = this.props
    if (!data) {
      return null
    }

    console.log('ApplicationsListView data', data)

    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

export default withNavigation(MultiSelectList)
