import React, {useEffect, useState} from 'react';
import dummy from '../api/dummy';

export default () =>{
    const [results, setResults] = useState([]);

    const searchApi= async () =>{
       const response = await dummy.get('/products?limit=100')
       setResults(response.data.products);
       //console.log(response.data.products[0].category);
    //    let products=(results);
       }
       
       useEffect(() => {
         searchApi();
       }, []);

       return [searchApi, results];
}