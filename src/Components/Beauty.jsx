import React, { useCallback, useEffect, useState } from "react";
import { getProductsBySubCategories } from "./Services/productServices";
import  thumbnail  from '../assets/thumbnail.jpg'
import { SubCategories } from "../Enumerations/SubCategories";

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
        <div key={index} className="col-md-3 mb-3">
          <div className="card" style={{ width: "100%" }}>
            <img
              src={ thumbnail}
              className="card-img-top h-100"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text fw-bold">Price: ₹{product.unitPrice}</p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Beauty