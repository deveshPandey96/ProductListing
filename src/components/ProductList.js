import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import ProductCard from './ProductCard';

const ProductList= ({title, res, navigation}) =>{
    return (
        <View style={styles.container}>
            
                
                <Text style={styles.title}>{title}</Text>
                
                <FlatList
                    horizontal
                    data={res}
                    keyExtractor={result=>res.id}
                    renderItem={({item}) => {
                        return (
                        <TouchableOpacity>
                            <ProductCard result={item}/>
                        </TouchableOpacity>
                        );
                    }}
                />
            
        </View>
    );
};

const styles = StyleSheet.create({
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
      },
      container: {
        marginBottom: 10
      }
});

export default ProductList;