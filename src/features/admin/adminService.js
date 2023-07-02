import axios from "axios";
import { USERS_BASE_URL } from "../../components/Constants/Config/config.dev";

const storedOrderId = localStorage.getItem('orderId');
const orderId = JSON.parse(storedOrderId);


const API_URL_1 = `${USERS_BASE_URL}/order/getpending`;

const API_URL_2 = `${USERS_BASE_URL}/order/getcompleted`;

const API_URL_3 = `${USERS_BASE_URL}/order/update-status/${orderId}`;

const API_URL_4 = `${USERS_BASE_URL}/order/getcount`;

const pendingorders = async (orderData) => {
  try {
    const response = await axios.get(API_URL_1, orderData);
    const orderId = response.slots.map(slot => slot._id);
    console.log("orderid",orderId);
    localStorage.setItem('orderIds', JSON.stringify(orderId));
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const completedorders = async (completedordersData) => {
  try {
    const response = await axios.get(API_URL_2, completedordersData);

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

const orderstatus = async (statusData) => {
  try {
    const response = await axios.get(API_URL_3, statusData);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const getcount = async (countData) => {
  try {
    const response = await axios.get(API_URL_4, countData);
    return response.data;
  } catch (error) {
    console.log("error",error)
    return error;
  }
};

const adminService = {
  pendingorders,
	completedorders,
	orderstatus,
  getcount
};

export default adminService;
