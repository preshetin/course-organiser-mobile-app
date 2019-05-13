import React, { Component } from 'react'
import { TouchableOpacity,
  FlatList, StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  };

  render () {
    const textColor = this.props.selected ? 'red' : 'black'
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={styles.item}>{textColor}{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class MultiSelectList extends React.PureComponent {
  state = { selected: (new Map(): Map<string, boolean>) };

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    this.props.navigation.navigate('Visitor', { id })
  };

  _renderItem = ({ item }) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render () {
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
