import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
   useEffect(() => {
      getProducts();
   }, []);



   function getProducts() {
      const url = 'http://localhost:3000/api/products';
   }

   return <>home</>;
}

export default Home;
