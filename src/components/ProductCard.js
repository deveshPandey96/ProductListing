import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const ProductCard =({result, navigation}) =>{
    return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Details', {id: result.id})} >
        <Image style={styles.image} source ={{uri: result.thumbnail}} />
        <Text style={styles.name}>{result.title}</Text>
        <Text>{result.rating} Stars</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
 image:{
    width: 250,
    height: 180,
    borderRadius: 4,
    marginBottom: 5
 },
  name:{
    fontWeight: 'bold'
  },
  container:{
    marginLeft: 15
  }
});

export default withNavigation(ProductCard);