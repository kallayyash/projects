import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import ProductList from './Component/ProductList';

export default class App extends React.Component {
  handle(e){
    console.log(e);

  }

  render() {
    return  <ProductList/>;
      }
}


