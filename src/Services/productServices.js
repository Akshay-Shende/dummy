import axios from "axios"

export const getAllProducts = async() => {
    try {
      const result = await axios.get("/api/v1/product");
      return result.data;

    } catch (error) {
        console.log("error in fetching products",error);
        throw error;
    }
}

export const getProductsBySubCategories = async(id) => {
  try {
    const result = await axios.get(`/api/v1/product?subCategory=${id}`);
    return result.data;

  } catch (error) {
      console.log("error in fetching products",error);
      throw error;
  }
}

export const addNewProduct = async(productData) => {
  try {
    const result = await axios.post(`/api/v1/product`,productData);
    return result.data;

  } catch (error) {
      console.log("error in fetching products",error);
      throw error;
  }
}