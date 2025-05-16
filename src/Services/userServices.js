import axios from "axios";


export const createUser = async(user) => {
    try {
        const response = await axios.post("/api/v1/users",user);
        return response.data; // ✅ return the data
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // ✅ optional: throw error so caller can catch it
      }
};


