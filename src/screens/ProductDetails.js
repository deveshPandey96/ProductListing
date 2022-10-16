import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Text, FlatList, Image, Button} from 'react-native';
import dummy from '../api/dummy';

const ProductDetails = ({navigation}) =>{
    const [result, setResult] = useState(null);
    const id= navigation.getParam('id');

    const getResult = async id =>{
        const response = await dummy.get(`/products/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
    
    return <View>
        <ScrollView>
        <FlatList 
        horizontal
        data={result.images}
        keyExtractor={(image)=> image}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}}/>
        }}
        />
        <Text>{result.brand} {result.title}</Text>
        <Text>{result.description}</Text>
        <Text>${result.price}</Text>
        <Text>{result.discountPercentage}% Discount</Text>
        
        <Button title='Add to Cart'/>
    
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 600,
        width: 700
    }
});

export default ProductDetails;