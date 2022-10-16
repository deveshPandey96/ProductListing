import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, Text, Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ProductList from '../components/ProductList';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results] = useResults();
    //const [cat, setCat] = useState([]);
    
    const unique = [...new Set(results.map(item => item.category))];
    console.log(unique)
    let len= unique.length;

   // const cat = distinct(results.category);
    const filterResultsByCategory = (category) =>{
        return results.filter(result =>{
            return result.category === category
        })
    }

    // function createCard(category){
    //     return <ProductList category={filterResultsByCategory(results.category)}/>;
    // }

    return (
        <View>
            
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={console.log(unique)}
            />
            <ScrollView>
              
            {results.map((result)=>{
                return <ProductList key={result.id} res={filterResultsByCategory(result.category)} title={result.category} />
            })}
            
            
            {/* <ProductList results={filterResultsByCategory(unique[0])} title={unique[0]}/>
            <ProductList results={filterResultsByCategory('laptops')} title ='Laptops' cat = 'laptops'/>
            <ProductList results={filterResultsByCategory('fragrances')} title ='Fragrances' cat = 'fragrances'/>
            <ProductList results={filterResultsByCategory('skincare')} title ='Skincare' cat = 'skincare'/>
            <ProductList results={filterResultsByCategory('groceries')} title ='Groceries' cat = 'groceries'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/>
            <ProductList results={filterResultsByCategory('home-decoration')} title ='Home-Decoration' cat = 'home-decoration'/> */}
            </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;