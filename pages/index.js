import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
   console.log(products);
   // useEffect(() => {
   //    getProducts();
   // }, []);

   // async function getProducts() {
   //    const url = 'http://localhost:3000/api/products';
   //    const response = await axios.get(url);
   //    console.log(response);
   // }
   return <>home</>;
}

Home.getInitialProps = async () => {
   //fetch data on server
   const url = 'http://localhost:3000/api/products';
   const response = await axios.get(url);
   //return response as data as an object
   return { products: response.data };
   //NOte: this object will be merged
};

export default Home;
