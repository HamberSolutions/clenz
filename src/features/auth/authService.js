import axios from "axios";
import { USERS_BASE_URL } from "../../components/Constants/Config/config.dev";
import { toast } from "react-toastify";

const API_URL_1 = `${USERS_BASE_URL}/user/register`;

const API_URL_2 = `${USERS_BASE_URL}/user/login`;


const register = async (userData) => {
  try {
    const response = await axios.post(API_URL_1, userData);
    if (response.data.code === "400") {
      return toast.error("User already exists!");
    }
    toast.success("Signup successful!");
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

let isLoggedIn = false; // Flag to track if user is already logged in

const login = async (loginData) => {
  try {
    const response = await axios.post(API_URL_2, loginData);

    if (response.data && !isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(response.data));
      isLoggedIn = true; // Set the flag to true
      toast.success("Login successful!");
    }

    console.log("response", response.data);

    return response.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};


const logout = () => {
  localStorage.clear();
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
