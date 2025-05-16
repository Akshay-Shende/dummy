import axios from "axios";

export const loginUser = async(loginDto) =>{
    try {
        const response = await axios.post("/api/v1/login",loginDto);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // ✅ optional: throw error so caller can catch it     
    }
}