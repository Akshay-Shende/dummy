import React, { useCallback, useEffect, useState } from "react";
import { getProductsBySubCategories } from "../../Services/productServices";
import  thumbnail  from '../../assets/thumbnail.jpg'
import Card from "../BasicComponents/Card";

const Kids = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async () => {
    const result = await getProductsBySubCategories(3);
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
  )
}

export default Kids