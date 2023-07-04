import axios from "axios";
import { USERS_BASE_URL } from "../../components/Constants/Config/config.dev";
import { toast } from "react-toastify";


const API_URL_1 = `${USERS_BASE_URL}/order/book-order`;

const API_URL_2 = `${USERS_BASE_URL}/order/getslots/2023/6`;

const orderbook = async (orderData) => {
  try {
    const response = await axios.post(API_URL_1, orderData);
    toast.success("Order placed successfully");
    return response.data;
  } catch (error) {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      // Unauthorized error (401)
      toast.error("Please sign in first");
    } else {
      toast.error("Failed to place order");
    }
    return error;
  }
};



const getslots = async (slotsData) => {
  try {
    const response = await axios.get(API_URL_2, slotsData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const dashboardService = {
	orderbook,
	getslots,
};

export default dashboardService;
