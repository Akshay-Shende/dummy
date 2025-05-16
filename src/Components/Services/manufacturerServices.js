import axios from "axios"

export const getAllManufacturer = async() => {
    try {
      const result = await axios.get("/api/v1/manufacturer");
    //  console.log(result);
      return result.data;

    } catch (error) {
        console.log("error in fetching manufacturer",error);
        throw error;
    }
}