import axios from "axios";
import { USERS_BASE_URL } from "../../components/Constants/Config/config.dev";


const API_URL_1 = `${USERS_BASE_URL}/order/getpending`;

const API_URL_2 = `${USERS_BASE_URL}/order/getcompleted`;

const API_URL_3 = `${USERS_BASE_URL}/order/update-status/`;

const API_URL_4 = `${USERS_BASE_URL}/order/getcount`;

const PendingOrders = async () => {
  try {
    const response = await axios.get(API_URL_1);
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
    const response = await axios.patch(API_URL_3+ statusData);
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
  PendingOrders,
	completedorders,
	orderstatus,
  getcount
};

export default adminService;
