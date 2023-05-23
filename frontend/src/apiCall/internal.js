import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001",
    // baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export const login = async (data) => {
    let response;
  
    try {
      response = await api.post("/login", data);
    } catch (error) {
      return error;
    }
  
    return response;
  };  

  export const signup = async (data) => {
    let response;
  
    try {
      response = await api.post("/register", data);
    } catch (error) {
      return error;
    }
  
    return response;
  };
  
  export const signout = async () => {
    let response;
    try {
      response = await api.post("/logout");
    } catch (error) {
      return error;
    }
  
    return response;
  };
  