import axios from "axios";



export const getAllRoles = async () => {
    try {
      const response = await axios.get("/api/v1/role");
      return response.data; // ✅ return the data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // ✅ optional: throw error so caller can catch it
    }
  };
