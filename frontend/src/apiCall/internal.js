import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001",
    // baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
    withCredentials: true,
    headers: {
      // "Content-Type": "application/json",
      'content-type': 'multipart/form-data',
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

  export const getAllBlogs = async () => {
    let response;
     try {
      response = await api.get('/blog/all');
     } catch (error) {
      console.log(error);
     }
     console.log(response);
     return response;
  }

  export const submitBlog = async (data) => {

    let response;

    try {
      response = await api.post("/blog", data);
    } catch (error) {
      return error;
    }
  
    return response;
  };
  
  