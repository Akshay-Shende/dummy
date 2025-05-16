import React, { useCallback, useEffect, useState } from "react";
import { getProductsBySubCategories } from "../../Services/productServices";
import  thumbnail  from '../../assets/thumbnail.jpg'
import { SubCategories } from "../../Enumerations/SubCategories";
import Card from "../BasicComponents/Card";

const Beauty = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async () => {
    const result = await getProductsBySubCategories(SubCategories.Beauty);
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

export default Beauty