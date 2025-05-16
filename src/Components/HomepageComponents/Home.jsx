import React, { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "../../Services/productServices";
import  thumbnail  from '../../assets/thumbnail.jpg'
import Card from "../BasicComponents/Card";

const Home = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async () => {
    const result = await getAllProducts();
    setProductList(result);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="container text-center">
    <div className="row">
      {productList.map((product, index) => (
        <Card product={product} />
      ))}
    </div>
  </div>
  
  );
};

export default Home;
