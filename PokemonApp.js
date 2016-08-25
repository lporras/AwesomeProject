'use strict';
var giphy = require('giphy-api')();
var React = require('react');

import {
  AppRegistry,
  Alert,
  Text,
  Image,
  TextInput,
  StyleSheet,
  View
} from 'react-native';

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30
  }
});

var PokemonApp = React.createClass({
  componentDidMount: function () {
    var query = "pokemon";
    giphy.search(query, function (err, res) {
      if (err) console.warn(err);
      if (res && res.data && res.data.length > 0) {
        let pic =  res.data[0].images.original.url;
        this.setState({
          pic: pic
        });
      }
    }.bind(this));
  },
  getInitialState: function () {
    let pic = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
    return {
      pic: pic
    }
  },
  render: function() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.text}>Pokemon</Text>
        <Image source={{uri: this.state.pic}} style={{width: 193, height: 110}}/>
      </View>
    )
  }
});

module.exports = PokemonApp;